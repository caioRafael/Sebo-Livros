import { getRepository } from 'typeorm';
import { Request, Response, request } from 'express';
import Book from '../model/Book';
import book_view from '../views/ViewsBook/book_view';
import * as yup from 'yup';


export default{
    async index(request:Request, response:Response){
        const bookRepository = getRepository(Book);

        const books = await bookRepository.find({
            relations:['user']
        });

        return response.json(book_view.renderMany(books));
    },
    
    async show(request:Request, response:Response){
        const {id} = request.params;
        const bookRepository = getRepository(Book);

        const books = await bookRepository.findOneOrFail(id,{
            relations:['user']
        });

        return response.json(book_view.render(books));
    },

    async create(request:Request, response:Response){
        const image = request.file.filename;
        const {
            title,
            synopsis,
            author,
            year,
            price,
            amount,
            user
        } = request.body;

        const bookRepository = getRepository(Book);

        const data = {
            title, 
            synopsis,
            author,
            year,
            price,
            amount,
            image,
            user
        };

        const schema = yup.object().shape({
            title: yup.string().required(),
            synopsis: yup.string().required(),
            author: yup.string().required(),
            year: yup.string().required().max(4),
            price: yup.number().required(),
            amount: yup.number().required(),
            image: yup.string().required(),
            user: yup.number().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const book = bookRepository.create(data);

        await bookRepository.save(book);

        return response.status(201).json(book);
    }
}
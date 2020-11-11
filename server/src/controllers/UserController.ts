import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import User from '../model/User';
import BooksUser_view from '../views/ViewsUser/BooksUser_view';
import user_view from '../views/ViewsUser/user_view';
import * as yup from 'yup';

export default{
    async index(request:Request, response:Response){
        const userRepository = getRepository(User);

        const users = await userRepository.find();

        return response.json(user_view.renderMany(users));
    },

    async showBooks(request:Request, response:Response){
        const {id} = request.params;
        const userRepository = getRepository(User);

        const user = await userRepository.findOneOrFail(id, {
            relations:['book']
        });

        return response.json(BooksUser_view.render(user));
    },

    async create(request:Request, response:Response){
        const {
            name_first,
            name_last,
            number,
            email,
            password
        } = request.body;
    
        const userRepository = getRepository(User);

        const data = {
            name_first,
            name_last,
            number,
            email,
            password
        };

        const schema = yup.object().shape({
            name_first: yup.string().required(),
            name_last: yup.string().required(),
            number: yup.string().required().max(11),
            email: yup.string().required().email(),
            password: yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        })
        
        const user = userRepository.create(data);
    
        await userRepository.save(user);
    
        return response.status(201).json(user)
    },

    async signin (request: Request, response: Response){
        const{email, password} = request.body;
        const userRepository = getRepository(User);

        const data = {
            email,
            password
        }

        const schema = yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const signin = await userRepository.find(data)


        return response.json(signin);
    }
}
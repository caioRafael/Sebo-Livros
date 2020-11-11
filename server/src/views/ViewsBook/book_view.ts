import Book from '../../model/Book';

export default{
    render(book: Book){
        return{
            id: book.id,
            title: book.title,
            synopsis: book.synopsis,
            year: book.year,
            author: book.author,
            price: book.price,
            amount: book.amount,
            image: `http://localhost:3333/uploads/${book.image}`,
            salesman: {
                name:book.user.name_first,
                surname: book.user.name_last,
                phone: book.user.number
            }
        };
    },

    renderMany(books: Book[]){
        return books.map(book => this.render(book));
    }
};
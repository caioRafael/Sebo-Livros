import Book from "../../model/Book";

export default{
    render(book:Book){
        return{
            id: book.id,
            title: book.title,
            auhor: book.author,
            image: `http://localhost:3333/uploads/${book.image}`
        }
    },

    renderMany(books:Book[]){
        return books.map(book => this.render(book));
    }
}
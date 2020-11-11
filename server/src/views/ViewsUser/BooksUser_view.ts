import User from "../../model/User";
import books_view from "./books_view";

export default{
    render(user:User){
        return{
            id: user.id,
            name: user.name_first,
            phone: user.number,
            email: user.email,
            books: books_view.renderMany(user.book),
        }
    }
}
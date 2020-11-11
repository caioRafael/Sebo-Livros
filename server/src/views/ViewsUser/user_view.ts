import User from "../../model/User";

export default{
    render(user:User){
        return{
            id: user.id,
            name: user.name_first,
            surname: user.name_last,
            email: user.email,
            phone: user.number
        }
    },

    renderMany(users:User[]){
        return users.map(user => this.render(user));
    }
}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Book from './Book';

@Entity('user')
export default class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name_first: string;

    @Column()
    name_last: string;

    @Column()
    number: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Book, book => book.user, {
        cascade:['insert', 'update']
    })
    @JoinColumn({name: 'user_id'})
    book: Book[]
}
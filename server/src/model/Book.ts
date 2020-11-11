import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('book')
export default class Book{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    synopsis: string;

    @Column()
    author: string;

    @Column()
    year: string;

    @Column()
    price: string;

    @Column()
    amount: string;

    @Column()
    image: string;

    @ManyToOne(() => User, user => user.book)
    @JoinColumn({name: 'user_id'})
    user: User;
}
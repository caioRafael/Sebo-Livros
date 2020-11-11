import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Footer from '../../componets/Footer';
import Header from '../../componets/Header';
import api from '../../Services/api';

import './styles.css';

interface Books{
    author: string;
    id: number;
    image: string;
    price: number;
    synopsis: string;
    title: string;
    year: string;
    salesman:{
        name: string;
        phone: string;
        surname: string;
    }
}

interface BookParams{
  id: string;
}

export default function Book(){
    const params = useParams<BookParams>();
    const [book, setBook] = useState<Books>();
    console.log(book);

    useEffect(() => {
        api.get(`book/${params.id}`).then(response => {
            setBook(response.data);
        })
    }, [params.id])

    const [ativo, setAtivo] = useState(false);
    function entrou(){
        setAtivo(!ativo)
        console.log("entrou");
    }
    return(
        <div id="container">
            <Header/>
                <div className="content">
                    <main className="book">
                        <div className="top-details">
                            <img src={book?.image} alt="capa"/>
                            <div className="details">
                                <strong className="title">
                                    {book?.title}
                                </strong><br/>
                                <span>
                                    Autor(a):
                                </span>
                                <span> {book?.author}</span>
                                <div className="extra-details">
                                    <section>
                                        <span>
                                        <strong>Preço:</strong>
                                        <span> R$ {book?.price}</span>
                                        </span>
                                        <div className="buttons">
                                        <button>
                                            <AiOutlineHeart size={25}/>
                                        </button>
                                                
                                        <button>
                                            <AiOutlineShoppingCart size={25}/>
                                        </button>
                                        </div>
                                    </section>
                                    <div className="description">
                                        <strong>Descrição:</strong>
                                        <p>{book?.synopsis}</p>
                                    </div>
                                    <Link to="#"> Comprar </Link>

                                </div>
                            </div>
                        </div>
                        <div className="bot-details">
                            <section>
                                <div className="top-table">
                                    <h2>Caracteristicas</h2>
                                    {ativo === true ? (
                                    <IoIosArrowUp onClick={entrou} size={40}/>
                                    ): (<IoIosArrowDown onClick={entrou} size={40}/>)}  
                                </div>        
                                {ativo && (
                                    <table>
                                        <tr>
                                            <td><strong>Titulo:</strong></td>
                                            <td><span>{book?.title}</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Preço:</strong></td>
                                            <td><span>R${book?.price}</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Ano:</strong></td>
                                            <td><span>{book?.year}</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Autor:</strong></td>
                                            <td><span>{book?.author}</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Vedendor:</strong></td>
                                            <td><span>{book?.salesman.name} {book?.salesman.surname}</span></td>
                                        </tr>
                                    </table>  
                                )}
                                                                                                
                            </section>
                        </div>
                    </main>
                </div>
            <Footer/>
        </div>
    );
}
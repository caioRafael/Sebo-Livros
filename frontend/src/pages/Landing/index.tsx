import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../componets/Footer';
import Header from '../../componets/Header';
import api from '../../Services/api';

import './styles.css';

interface Book{
  id: number;
  title:string;
  author:string;
  image:string;
  price:number;
}

export default function Landing(){
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    api.get('book').then(response => {
      setBooks(response.data)
    })
  }, []);

    return(
      <div id="container">
        <Header>
          <input 
            type="text"
            placeholder="Buscar por Livro/Autor"
            className="search"
          />
        </Header>

        <main className="content">
          <h2>Livros a venda!</h2>

          <div className="content-books">
            {books.map(book => {
              return(
                <section key={book.id}>
                  <img src={book.image} alt="capa"/>

                  <div className="informations">
                    <strong>Titulo: </strong>
                    <p>{book.title}</p>

                    <strong>Autor: </strong>
                    <p>{book.author}</p>
                  </div>

                  <div className="price">
                    <strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</strong>
                  </div>
                  
                  <Link to={`/book/${book.id}`} className="button">
                    Saiba Mais
                  </Link>

                </section>
            );
            })}            
          </div>
        </main>

        <Footer/>

      </div>    
    );
}
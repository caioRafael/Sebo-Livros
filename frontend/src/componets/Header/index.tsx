import React from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';

import './styles.css';

interface PageHeaderProps{}

const Header: React.FC<PageHeaderProps> = (props) => {
    return(
        <header>
          <Link to="/">
            <img src={Logo} alt="Logo"/>
          </Link>

            {props.children}

          <div className="options">
            <Link to="#">
              <AiOutlineUser size={25}/>
              <span>Login</span>
            </Link>

            <Link to="#">
              <AiOutlineHeart size={25}/>
            </Link>
            
            <Link to="#">
              <AiOutlineShoppingCart size={25}/>
            </Link>
          </div>
          
        </header>
    );
}

export default Header;  
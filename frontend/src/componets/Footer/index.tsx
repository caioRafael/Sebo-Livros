import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { TiSocialFacebook, TiSocialGithub, TiSocialTwitter } from 'react-icons/ti';

import './styles.css';

export default function Footer(){
    return(
        <footer>
          <div className="contact">
            <span>Desenvolvimetno: Caio Rafael</span><br/>
            <span>Email: caiorafaelrg@gmail.com</span>
          </div>

          <div className="social-networks">
            <AiFillInstagram size={40} color="#f24b5c"/>
            <TiSocialFacebook size={40} color="#375d9e"/>
            <TiSocialTwitter size={40} color="#02a1f5"/>
            <TiSocialGithub size={40} color="#000000"/>
          </div>
        </footer>
    );
}
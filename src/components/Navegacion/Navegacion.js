import React from 'react';
import {BiUser} from "react-icons/bi";
import {BsClipboardData, BsBriefcase} from "react-icons/bs";
import "./Navegacion.scss";
import { Link } from 'react-scroll';

export function Navegacion() {
  return (
  <nav className='nav'>
    <div className='contenedor'>
        <div className='enlaces'>
          <Link 
            to='aboutus'  
            activeClass='active' 
            smooth={true} 
            spy={true} 
            className='links'>
            <BiUser/>
          </Link>

          <Link 
            to='lastwork' 
            activeClass='active' 
            smooth={true} 
            spy={true} 
            className='links'>
            <BsClipboardData/>
          </Link>

          <Link 
            to='footer' 
            activeClass='active' 
            smooth={true} 
            spy={true} 
            className='links'>
            <BsBriefcase/>
          </Link>
        </div>
      </div>
  </nav>
  );
};



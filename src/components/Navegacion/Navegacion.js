import React from 'react';
import {HiMiniUserGroup} from "react-icons/hi2";
import {IoMdConstruct} from "react-icons/io";
import { RxIdCard } from "react-icons/rx";
import { BiSolidMessageDetail } from "react-icons/bi";


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
            <HiMiniUserGroup/>
          </Link>

          <Link 
            to='lastwork' 
            activeClass='active' 
            smooth={true} 
            spy={true} 
            className='links'>
            <IoMdConstruct/>
          </Link>

          <Link 
            to='comentarios' 
            activeClass='active' 
            smooth={true} 
            spy={true} 
            className='links'>
            <BiSolidMessageDetail/>
          </Link>

          <Link 
            to='footer' 
            activeClass='active' 
            smooth={true} 
            spy={true} 
            className='links'>
            <RxIdCard/>
          </Link>
        </div>
      </div>
  </nav>
  );
};



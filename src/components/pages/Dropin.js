import React, { useState } from 'react';
import './dropdown.css';
import {MdArrowDropDown} from 'react-icons/md'
import { Link } from 'react-router-dom';


const Dropin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" >
        Status <span className='span'  onClick={toggleMenu}><MdArrowDropDown/></span>
      </button>
      {isOpen && (
        <ul className= { isOpen ? "dropdown__menu active" : 'dropdown__menu'}>
             <Link className='li' to='/all'>
          <li className="dropdown__item">All</li>
          </Link>
          <Link className='li' to='/active'>
          <li className="dropdown__item">Active</li>
          </Link>
          <Link className='li' to='/exited'>
          <li className="dropdown__item">Exited</li>
          </Link>
        
        </ul>
      )}
    </div>
  );
};

export default Dropin;

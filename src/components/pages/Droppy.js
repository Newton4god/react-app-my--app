import React, { useState } from 'react';
import './dropdown.css';
import {MdArrowDropDown} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Droppy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle">
        Category <span className="span" onClick={toggleMenu}><MdArrowDropDown/></span>
      </button>
      {isOpen && (
        <ul  className= { isOpen ? "dropdown__menu active" : 'dropdown__menu'} >
       
          <Link className='li' to='/climate'>
          <li className="dropdown__item">ClimateTech</li>
          </Link>
          <Link className='li' to='/consumer'>
          <li className="dropdown__item">Consumer</li>
          </Link>
          <Link className='li' to='/fintech'>
          <li className="dropdown__item">Fintech</li>
          </Link>
          <Link className='li' to='/gaming'>
          <li className="dropdown__item">Gaming</li>
          </Link>
          <Link className='li' to='/music'>
          <li className="dropdown__item">Music</li>
          </Link>
          <Link className='li' to='/sports'>
          <li className="dropdown__item">Sports</li>
          </Link>
          <Link className='li' to='/technology'>
          <li className="dropdown__item">Technology</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Droppy;

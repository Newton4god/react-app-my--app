import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className='secA'>
            
        <img src='./images/zagadat1.png' alt='zagadat' />
        
        <div className='okay'>
              <Link className='elo' to = '/'  >
                <h2>Home</h2>
                </Link>
              <Link   className='elo' to = '/about'>
                <h2>About</h2>
                </Link>
              <Link  className='elo' to = '/portfolio'>
                <h2>Portfolio</h2>
                </Link>
              <Link  className='elo' to = '/contact'> 
              <h2>Contact</h2>
              </Link>
        </div>
         
         <button className='logo'>
        <AiFillInstagram/>
        <FaLinkedinIn/>
        <FaTwitter/>
        </button>

        </div>

        <div className='secB'>

            <div className='copy'>
            &copy;2023 Zagadat Capital
            </div>
            
            <div className='privacy'>
                <h3 className='tem'>Privacy</h3>
                <h3 className='tem'>Terms of Use</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer
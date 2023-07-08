import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'





export const Navbar = () => {
 
   const [mobile, setmobile] = useState(false)
    

   return(
    
        <nav className='navbar'>
         
        <h1 className='img'>OGDEV</h1>
           <ul  className= { mobile ? "nav-links active" : 'nav-links'} 

           onClick={() => setmobile(false )}
           >
          
              <Link className='li' to = '/'  >
                <li>Home</li>
                </Link>
              <Link   className='li' to = '/about'>
                <li>About</li>
                </Link>
              <Link  className='li' to = '/portfolio'>
                <li>Portfolio</li>
                </Link>
              <Link  className='li' to = '/contact'> 
              <li>Contact</li>
              </Link>
              
           </ul>

           <button className = "mobile-menu-icon"   onClick={ () => setmobile(!mobile) } >
            {mobile? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars" aria-hidden="true"></i>}
           
           </button>
           
        </nav>
       
      
   )

}

import React from 'react'
import './port.css'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from '../../Footer';

const Technology = () => {
  return (
    <div className="App">

      <div className="james">

      <div className="investing">
           <h1 className="oh">Our Portfolio</h1>
           <h3 className="o2"> We believe that every business has it's growth potential
            and we tend to support the creative ideas 
            of founders and investing in their companies </h3>
        </div>
       
       <div className="rod"> 
       <h1><Droppy/></h1>
       <h1><Dropin/></h1>
       </div > 
     


       <div className="Portfolio">
           <h1 className="port"></h1>
           
           <div className="cont">

           <div className="ban">
            <a href="https://decagon.institute/" target="_blank" className="image-container">
             <img src='./images/Decagon.png' alt="ll" className="picture"/>
             </a>
             <h1 className="west"> Decagon</h1>
             <h3 className="south">Decagon is elite software engineerinand leadership training institute institute that equips high potential talent with world-class software engineering andleadership skills</h3>
           </div>
           <div className="ban">
            <a href="https://decagon.institute/" target="_blank" className="image-container">
             <img src='./images/Decagon.png' alt="ll" className="picture"/>
             </a>
             <h1 className="west"> Decagon</h1>
             <h3 className="south">Decagon is elite software engineerinand leadership training institute institute that equips high potential talent with world-class software engineering andleadership skills</h3>
           </div>


           </div>

        </div>




        <div>
          <Footer/>
          </div>

      </div>
  
  </div>
  )
}

export default Technology
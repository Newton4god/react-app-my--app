import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import Loader from "../Loader";
import './Portfolio.css'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from "../../Footer";

const Portfolio = () => {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading delay     
  //   const delay = setTimeout(() => {
  //     setIsLoading(false);
  
  //   }, 3000);

  //   // Cleanup
  //   return () => clearTimeout(delay);
  // }, []);

  return (
    <div className="App">
      {/* {isLoading ? 
        <Loader />
      : ( */}
        
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
             <h1 className="port"> </h1>
             
             <div className="awe">

             <div className="brown">
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Decagon.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Decagon</h1>
               <h3 className="south">Decagon is elite software engineerinand leadership training institute institute that equips high potential talent with world-class software engineering andleadership skills</h3>
             </div>

           
             <div className="brown">
              <a href="https://ouredenlife.com/" target="_blank"  className="image-container">
               <img src='./images/eden.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Eden Life</h1>
               <h3  className="south">Eden is technology + the best parts of humanity (empathy, institution and efficiency)
               that keeps your home running efficiently so you can live your life</h3>
               </div>
        

           
             <div className="brown">
              <a href="https://www.paisa.mx/" target="blank" className="image-container">
               <img src='./images/celebration.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Paisa</h1>
               <h3 className="south">Paisa builds financial security for families</h3>
             </div>

           
             <div className="brown">
              <a href="https://www.pawapay.io/" target="blank" className="image-container">
               <img src='./images/pawapay.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> PawaPay</h1>
               <h3 className="south">Pawapay provides one API and one portal to integrate
               mobile money across Africe into your payment processes</h3>
             </div>

           
             <div className="brown">
              <a href="https://rukahair.com/" target="blank" className="image-container">
               <img src='./images/Ruka Hair.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Ruka Hair</h1>
               <h3 className="south">Ruka Hair aims to depart from broad categories such as 'coily' or 'kinky' 
               and sell a variety of hair extensions that mimic real curl patterns </h3>
             </div>
           
             <div className="brown" id="port">
              <a href="https://www.betpawa.ng/" target="_blank" className="image-container">
               <img src='./images/betpawa.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Betpawa</h1>
               <h3 className="south">BetPawa's mission is to provide a home for all of Africa's dreamers.
                A place where everyone has the same opportunity to achieve anything they can thin</h3>
             </div>
             <div className="brown">
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Decagon.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Decagon</h1>
               <h3 className="south">Decagon is elite software engineerinand leadership training institute institute that equips high potential talent with world-class software engineering andleadership skills</h3>
             </div>

           
             <div className="brown">
              <a href="https://ouredenlife.com/" target="_blank"  className="image-container">
               <img src='./images/eden.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Eden Life</h1>
               <h3  className="south">Eden is technology + the best parts of humanity (empathy, institution and efficiency)
               that keeps your home running efficiently so you can live your life</h3>
               </div>
        

           
             <div className="brown">
              <a href="https://www.paisa.mx/" target="blank" className="image-container">
               <img src='./images/celebration.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Paisa</h1>
               <h3 className="south">Paisa builds financial security for families</h3>
             </div>

           
             <div className="brown">
              <a href="https://www.pawapay.io/" target="blank" className="image-container">
               <img src='./images/pawapay.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> PawaPay</h1>
               <h3 className="south">Pawapay provides one API and one portal to integrate
               mobile money across Africe into your payment processes</h3>
             </div>

           
             <div className="brown">
              <a href="https://rukahair.com/" target="blank" className="image-container">
               <img src='./images/Ruka Hair.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Ruka Hair</h1>
               <h3 className="south">Ruka Hair aims to depart from broad categories such as 'coily' or 'kinky' 
               and sell a variety of hair extensions that mimic real curl patterns </h3>
             </div>
           
             <div className="brown" id="port">
              <a href="https://www.betpawa.ng/" target="_blank" className="image-container">
               <img src='./images/betpawa.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Betpawa</h1>
               <h3 className="south">BetPawa's mission is to provide a home for all of Africa's dreamers.
                A place where everyone has the same opportunity to achieve anything they can thin</h3>
             </div>
              </div>

             <div>
          <Footer/>
          </div>

          </div>


        </div>
      {/* )} */}
    </div>
  );
};

export default Portfolio;


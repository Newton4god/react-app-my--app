import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./About.css"
import Footer from "../../Footer";
import Loader from "../Loader";


const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay


     
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="App">
    
         {
          isLoading ?
          <Loader/> :
        (<div className="About">

        <div className="investing">
             <h1 className="oh">About Zagadat Capital</h1>
             <h3 className="o2">At Zagadat Capital, we like to focus our investment on 
              companies looking to make impactful changes in the 
             society, we invest in nationally and globally for the right ideas</h3>
          </div>

          <div className="Portfoli">
             <h1 className="porter"> Zagadat Team</h1>
             <h3 className="bol">Helping out portfolio companies scale quickly</h3>
        


      
             
             <div className="container">

              


             <div className="portfolio-imag" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Mr eazi.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes"> Oluwatosin "Mr Eazi" Ajibade</h1>
               <h3 className="sout">chief investment Officer</h3>
             </div>

           
             <div className="portfolio-imag">
              <a href="https://ouredenlife.com/" target="_blank"  className="image-container">
               <img src='./images/liban.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes"> Liban Soleman</h1>
               <h3  className="sout">Adviser</h3>
               </div>
        

           
             <div className="portfolio-imag">
              <a href="https://www.paisa.mx/" target="blank" className="image-container">
               <img src='./images/Adrienne Everett.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes">Adrienne Everett</h1>
               <h3 className="sout">Adviser</h3>
             </div>

           
             <div className="portfolio-imag">
              <a href="https://www.pawapay.io/" target="blank" className="image-container">
               <img src='./images/Daniel.png' alt="love" className="picture"/>
               </a>
               <h1 className="wes">Daniel Kwame Osafo</h1>
               <h3 className="sout">Adviser</h3>
             </div>

           
             <div className="portfolio-imag">
              <a href="https://rukahair.com/" target="blank" className="image-container">
               <img src='./images/Olu Odeneye.png' alt="love" className="picture"/>
               </a>
               <h1 className="wes">Olu Odeneye</h1>
               <h3 className="sout"> Aviser</h3>
             </div>
           
             <div className="portfolio-imag" id="port">
              <a href="https://www.betpawa.ng/" target="_blank" className="image-container">
               <img src='./images/Iyinoluwa.png' alt="love" className="picture"/>
               </a>
               <h1 className="wes">Iyinoluwa Aboyeji</h1>
               <h3 className="sout">Adviser</h3>
             </div>
             </div>

          </div>



          <div className="Portfoli">
             <h1 className="porte"> Sectors</h1>
           
             <div className="containe">


             <div className="portfolio-ima" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Music.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes">Music</h1>
             </div>

             <div className="portfolio-ima" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Consumer.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes"> Consumer</h1>
             </div>

             <div className="portfolio-ima" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Technology.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes">Technology</h1>
             </div>

             <div className="portfolio-ima" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Climatetech.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes"> Climate Tech</h1>
             </div>

             <div className="portfolio-ima" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Gaming.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes"> Gaming</h1>
             </div>

             <div className="portfolio-ima" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Sports.png' alt="ll" className="picture"/>
               </a>
               <h1 className="wes"> Sports</h1>
             </div>

             </div>

          </div>

          <a href = "/portfolio" className="eli">
          <button className="button">
          View Portfolio
          </button>
          </a>


          <div className="Portfoli">
             <h1 className="por"> Countries</h1>
                  
             
             <div className="cow">

             <div className="portfolio-im" >
              <a href="https://decagon.institute/" target="_blank" className="image-container">
               <img src='./images/Nigeria.png' alt="ll" className="pic"/>
               </a>
               <h1 className="win">Nigeria </h1>
   
             </div>

           
             <div className="portfolio-im">
              <a href="https://ouredenlife.com/" target="_blank"  className="image-container">
               <img src='./images/Asia.png' alt="ll" className="pic"/>
               </a>
               <h1 className="win"> Asia</h1>
               </div>
        

           
             <div className="portfolio-im">
              <a href="https://www.paisa.mx/" target="blank" className="image-container">
               <img src='./images/united state.png' alt="ll" className="pic"/>
               </a>
               <h1 className="win">United States</h1>
             </div>

           
             <div className="portfolio-im">
              <a href="https://www.pawapay.io/" target="blank" className="image-container">
               <img src='./images/Estonia.png' alt="love" className="pic"/>
               </a>
               <h1 className="win">Estonia</h1>
             </div>

           
             <div className="portfolio-im">
              <a href="https://rukahair.com/" target="blank" className="image-container">
               <img src='./images/united Kingdom.png' alt="love" className="pic"/>
               </a>
               <h1 className="win"> United Kingdom</h1>
             </div>
           
             <div className="portfolio-im" id="port">
              <a href="https://www.betpawa.ng/" target="_blank" className="image-container">
               <img src='./images/colombia.png' alt="love" className="pic"/>
               </a>
               <h1 className="win">Colombia </h1>      
             </div>
             </div>

          </div>

         <div>
          <Footer/>
         </div>
         
          </div>
  )
}
        </div>
    
  
  );
};

export default About;


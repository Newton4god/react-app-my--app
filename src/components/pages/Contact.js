import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import './Contact.css'
import Formy from "./Formy";
import Footer from "../../Footer";

const Contact = () => {
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
      {isLoading ? 
        <Loader />
       : (
        
        <div className="home">

          <div className="investing">
             <h1 className="oh">Contact Us</h1>
             <h3 className="o2"> We love investing in cool ideas.
             if you want to build something big and 
             are looking for the right partner to help you grow - let's talk</h3>

          </div>
        
         
          <div className="dobe">

          <div className="wen">            
        <h1 className="don"> Write to us</h1>
        <h3 className="obo">We'll make to sure to get in touch with you as soon as possible</h3>
          </div>

          <div className="band">
          <Formy/>
          </div>
        </div>
      
     
       
      <div>
        <Footer/>
      </div>

        </div>

       )}
    </div>
  );
};

export default Contact;


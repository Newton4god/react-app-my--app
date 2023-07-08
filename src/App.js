import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import  About  from './components/pages/About';
import Contact  from './components/pages/Contact';
import Active from './components/pages/Active';
import All from './components/pages/All';
import Consumer from './components/pages/Consumer';
import Exited from './components/pages/Exited';
import ClimateTech from './components/pages/ClimateTech';
import Fintech from './components/pages/Fintech';
import Gaming from './components/pages/Gaming';
import Music from './components/pages/Music';
import Sports from './components/pages/Sports';
import Technology from './components/pages/Technology'


function App() {
  
  return (
   
   <Router>
   <Navbar/>
     <Routes>
         <Route path='/'  element={  <Home/> }/>
         
         <Route path='/about' element={<About/>}/>
         
         <Route path='/portfolio' element={<Portfolio/>}/>
      
         <Route path='/contact' element={<Contact/>}/>
      
         <Route path='/active' element={<Active/>}/>
      
         <Route path='/all' element={<All/>}/>
      
         <Route path='/exited' element={<Exited/>}/>

         <Route path='/climate' element={<ClimateTech/>}/>

         <Route path='/consumer' element={<Consumer/>}/>
         
         <Route path='/fintech' element={<Fintech/>}/>

         <Route path='/gaming' element={<Gaming/>}/>

         <Route path='/music' element={<Music/>}/>

         <Route path='/sports' element={<Sports/>}/>

         <Route path='/technology' element={<Technology/>}/>

     </Routes>
     
   </Router>
  
  );
}

export default App;

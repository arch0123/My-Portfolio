import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services  from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer  from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ResumePage from './Pages/ResumePage';


const App = () => { 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/> 
      <Contact/>
      <Footer/>
     
    <Router>
      <div>
        <Routes>
        
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>



    </div>
  ) 
  
} 

export default App

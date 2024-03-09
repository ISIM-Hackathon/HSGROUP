import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About';
import Lostfound from './components/Lostfound'; 
import Clean from './components/Clean'


function App() {
  return (

      <>
        <Navbar />
        <marquee className="marquee">International School Of Informatics & Management: Admission Open Btech Section 2023-24 Contact us on tel: +917052101786</marquee>
           <Main/>
           <About/>
           <Lostfound/>
           <Clean/>
      </>
    
  );
}

export default App;

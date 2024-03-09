import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About';
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Application header start */}
      <Navbar/>
      <marquee className="marquee">Internationl School Of Informatics & Management : Admission Open Btech Secssion 2023-24 Contect us on tel : +917052101786 </marquee>
      {/* Application header end */}
      

        



    <Main/>
    <About/>
    <Footer/>
      
    </div>
  );
}

export default App;
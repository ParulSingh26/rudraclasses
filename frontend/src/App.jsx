
import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Courses from "./components/Courses";
// import Contact from "./components/Contact";


function App() {
  

  return (
    <>
     
      <Navbar />
      <Outlet/>
      <Footer/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    
    </>
  )
}

export default App

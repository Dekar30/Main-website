import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home.js';
import ImageSlider from './components/pages/imageSlider/ImageSlider';

function App() {
  return (
   <Router>
      <Navbar />
    <Routes>
        <Route path='/' Component={Home}/>
        <ImageSlider/>
    </Routes>

   </Router>
  );
}

export default App;

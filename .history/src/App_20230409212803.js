import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home.js';

function App() {
  return (
   <Router>
      <Navbar />
    <Routes>
        <Route path='/' exact component={Home}/>
    </Routes>

   </Router>
  );
}

export default App;

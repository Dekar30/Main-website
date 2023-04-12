import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
      <Navbar />
    <Routes>
        <Route path='/'/>
    </Routes>

   </Router>
  );
}

export default App;

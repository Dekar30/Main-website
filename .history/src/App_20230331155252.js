import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import {Router} from 'react-router-dom'

function App() {
  return (
   <Router>
      <Navbar />
   </Router>
  );
}

export default App;

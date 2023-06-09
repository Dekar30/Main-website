import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import {BrowseRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
      <Navbar />
    <Switch>
        <Route path='/'/>
    </Switch>

   </Router>
  );
}

export default App;

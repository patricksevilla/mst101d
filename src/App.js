import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home'


function App(){
  return(
    <>
    <Router>
        <Navbar />
        <HeroSection />
        <Switch>
         <Route path='/' exact components={Home}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;



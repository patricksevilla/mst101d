import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Home() {
    return (
    <>
    <h1>hello</h1>
    <Router>
        <Switch>
          <HeroSection />
        </Switch>
    </Router>
    </>
 );
}
export default Home;
// import logo from './logo.svg';


import React from 'react'
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'exact>

        </Route>
      </Switch>
    </Router>
    </>
    


  //   {/* <div className="App">
  //     <a href="https://bulsu.edu.ph/">Bulacan State Universty</a>

  //     <div className='iicon'>
  //     <i className='fab fa-github-square' />
  //     <i className='fas fa-user' />
  //     <i className='fas fa-times' />
  //     <i className='fas fa-bars' />
  //     </div> */}


  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //   // </div>
  );
}

export default App;

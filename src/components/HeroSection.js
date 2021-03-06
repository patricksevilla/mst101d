import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ce.mp4' autoPlay loop muted />
      <h1 text-align='center' >BUILDING TOMORROWS COMMUNITY</h1>
      <p text-align='center' text-align-last='center' word-break= 'break-all' word-wrap= 'break-word' text-justify = 'inter-word'> 
        A Comprehensive Guide to Civil Engineering Program
      </p>

 
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PICE Hymn <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

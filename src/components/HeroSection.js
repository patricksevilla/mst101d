import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
import videoEto from "./videoEto.mp4"

function HeroSection() {
  return (
    <div>
        <video src="./videoEto.mp4" autoPlay loop muted>
            <source src={videoEto} type="video/mp4"></source>
        </video>
        <h1>Bulacan State University</h1>
        <p>Welcome to College of Engineering</p>

        <div className="hero-btns">
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                INSIDE BSU
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}
            >
                WATCH THIS <i className='far fa-play-circle' />
            </Button>
        </div>      
    </div>
  )
}
export default HeroSection



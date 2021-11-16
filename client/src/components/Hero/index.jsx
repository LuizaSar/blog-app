import React from 'react';
import './styles.css'
import image from '../assets/images/hero-image.jpg'

function Hero () {
   return (
      <div className='hero'>
         <div className="hero__title"> A humble tech blog</div>
         <div className='hero__subtitle'>GAMING / ENTERTAINMENT / TECH</div>
         <div className="hero__img">
            <img src={image} alt="" />
         </div>
      </div>
   )
}

export default Hero 

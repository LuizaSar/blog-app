import React from 'react'
import './styles.css'
import image from '../assets/images/sidebar-img.jpeg'

function Hero() {
	return (
		<div className="hero">
			<div className="hero__img">
				<div className="hero__title"> Tech Blog</div>
				<div className="hero__subtitle">NEWS / TRENDS / UPDATES</div>
				<img src={image} alt="" />
			</div>
		</div>
	)
}

export default Hero

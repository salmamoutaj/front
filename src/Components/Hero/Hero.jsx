import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>BIJOUX EXCLUSIFS POUR ÉTINCELER À CHAQUE INSTANT</h2>
                <div>
                    <p>Pour toutes les occasions</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Explorez la Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
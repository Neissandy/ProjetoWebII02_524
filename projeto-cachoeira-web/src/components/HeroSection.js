import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <h1> BEM-VINDO AO CACHOEIRAS WEB!</h1>
            <p> Descubra as incríveis cachoeiras do estado de Alagoas em um só lugar. Você poderá planejar sua visita turistica
                        a partir das nossas recomendações. </p>
            <p>Confira a localização, preços e muito mais!</p>
        </div>
    )
}

export default HeroSection

/*             <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyles='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className='btns' 
                    buttonStyles='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far 
                    fa-play-circle' />
                </Button>
            </div> */
  
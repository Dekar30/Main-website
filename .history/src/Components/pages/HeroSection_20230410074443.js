import React from 'react'
import { Button } from '../button/Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

function HeroSection({
    lightBg, 
    topLine, 
    lightText, 
    lightTextDesc, 
    headline, 
    description,
    buttonLabel, 
    image, 
    alt, 
    imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'home_hero-section' : 'home_hero-section darkBg'}>
                <div className='container'>
                    <div className='row home_hero-row'
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className='col'>
                            <div className='home_hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}</h1>
                                <p className={lightTextDesc ? 'home_hero-subtitle' : 'home_hero-subtitle dark'}>
                                    {description}</p>
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home_hero-img-wrapper'>
                                <img src={image} alt={alt} className='home_hero-img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
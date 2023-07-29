import React from 'react'
import {FadeInOnScroll} from "../FadeInOnScroll/FadeInOnScroll.jsx"
import "./AboutMeSlide.css"

function AboutMeSlide() {

  return (
    <>
        <FadeInOnScroll>
            <div className='title' id='about-me'><span>About me</span></div>
        </FadeInOnScroll>
        <FadeInOnScroll>
            <div className='aboutMeSlide'>            
                    <span className='bio'>I'm a developer based in Guadalajara, Mexico focused on creating interactive digital experiences on the web, as well as creating indie video games in my spare time.</span>
                    <div className='retrato'>
                        <img src="./Retrato.png" alt="Gerson Armando Lopez Duran Retrato" />
                    </div>
            </div>
        </FadeInOnScroll>
    </>
  )
}

export {AboutMeSlide};
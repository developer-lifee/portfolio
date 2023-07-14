import React from 'react'
import "./Footer.css"
import { FadeInOnScroll } from '../FadeInOnScroll/FadeInOnScroll'

function Footer() {
  return (
    <>
    <FadeInOnScroll>
    <div className='footer'>
        <span id='email'>galdl1438@gmail.com</span>
        <div className='redes'>
            <ul>
                <li><a href="https://github.com/GersenX3" target="_blank"><button>GITHUB</button></a></li>
                <li><a href="https://www.linkedin.com/in/gerson-armando-lopez-49a7231aa/" target="_blank"><button>LINKEDIN</button></a></li>
            </ul>
        </div>
    </div>
    </FadeInOnScroll>
    </>
  )
}

export { Footer}
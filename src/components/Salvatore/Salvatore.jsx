import React from 'react'
import { FadeInLeft } from '../FadeInLeft/FadeInLeft.jsx'
import "./Salvatore.css"

function Salvatore() {
  return (
    <div className='salvatore' id='salvatore-landing-page'>
    <FadeInLeft>
    <ul className='tlist'>
      <li>
        <span id='blackSpace'> Cat<br/> Soul</span>
      </li>
      <li>
        <span>
            Salvatore <br/>Landing page
        </span>
      </li>
    </ul>
    </FadeInLeft>
    <div className='description'>
    <FadeInLeft>
      <div>
        <img src="./salvatore.jpg" alt="" className='taskTuneImg'/>
      </div>
    </FadeInLeft>  
    <FadeInLeft>
      <div>
        <div className='text'>
          <span>I designed and developed Salvatore's landing page, a page that contains his most recent works, a video documentary of his career, as well as the contact information to schedule an appointment.<br/><br/></span>
        </div>
        <a href="https://salvatoretatuador.netlify.app/" target="_blank"><button className='buttonTry'>See page</button></a>
      
      </div>
      </FadeInLeft>  
    </div>
  </div>
  )
}

export {Salvatore}
import React from 'react'
import {FadeInOnScroll} from "../FadeInOnScroll/FadeInOnScroll.jsx"
import {FadeInLeft} from "../FadeInLeft/FadeInLeft.jsx"

import "./TaskTune.css"

function TaskTune() {

  return (
    <>
      <div className='task-tune'>
        <FadeInLeft>
        <ul className='tlist'>
          <li>
            <span>
              Featured Projects
            </span>
          </li>
          <li>
            <span> Task Tune</span>
          </li>
        </ul>
        </FadeInLeft>
        <div className='description'>
        <FadeInLeft>
          <div>
            <div className='text'>
              <span>Task tune is a task manager that will recommend a song for the task you are performing. Underneath the text of your task you will see the song we recommend you to perform, the artist, the photo of their album and a direct link to that song on Spotify.<br/><br/></span>
            </div>
            <a href="https://tasktune.netlify.app/" target="_blank"><button className='buttonTry'>Try it</button></a>
          
          </div>
          </FadeInLeft>
          <FadeInLeft>
          <div>
            <img src="./taskTune.png" alt="" className='taskTuneImg'/>
          </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  )
}

export {TaskTune};
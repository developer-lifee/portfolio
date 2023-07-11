import React from 'react'
import { FadeInLeft } from '../FadeInLeft/FadeInLeft.jsx'
import "./CatSoul.css"

function CatSoul() {

  return (
    <>
      <div className='catSoul'>
        <FadeInLeft>
        <ul className='tlist'>
          <li>
            <span id='blackSpace'> Cat<br/> Soul</span>
          </li>
          <li>
            <span>
                Cat Soul
            </span>
          </li>
        </ul>
        </FadeInLeft>
        <div className='description'>
        <FadeInLeft>
          <div>
            <img src="./catSoul.gif" alt="" className='taskTuneImg'/>
          </div>
        </FadeInLeft>  
        <FadeInLeft>
          <div>
            <div className='text'>
              <span>Cat soul is a platform game that is being developed with GameMaker 2.
An adventure that will explore the lives of three kitten brothers who share a sad past which they do not yet know.
The release date for Nintento Switch and PC will be confirmed in the near future.<br/><br/></span>
            </div>
            <a href="" target="_blank"><button className='buttonTry'>See more</button></a>
          
          </div>
          </FadeInLeft>  
        </div>
      </div>
    </>
  )
}

export {CatSoul};
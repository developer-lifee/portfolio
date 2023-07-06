import React from 'react'
import {FadeInDown} from "../FadeInDown/FadeInDown.jsx"
import "../Header/Header.css"

function Header() {

  return (
    <FadeInDown>
    <div className='header'>
        <ul className='list'>
            <li>
            <span>Gerson <br/>Lopez</span>
            </li>
            <li>
            <p>Available for freelance  <br/>work from august 2023</p>
            </li>
            <li>
            <button className='contactButton'>Contact</button>
            </li>
        </ul>
    </div>
    </FadeInDown>
  )
}

export {Header};
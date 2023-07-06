import React from 'react'
import "../Header/Header.css"

function Header() {

  return (
    <div className='header'>
        <ul className='list'>
            <li>
            <span>Gerson <br/>Lopez</span>
            </li>
            <li>
            <p>Available for <br/>freelance work <br/>from august 2023</p>
            </li>
            <li>
            <button className='contactButton'>Contact</button>
            </li>
        </ul>
    </div>
  )
}

export {Header};
import { useState } from 'react'
import { Header } from "./components/Header/Header.jsx"
import './App.css'
import { PresentacionSlide } from './components/PresentacionSlide/PresentationSlide.jsx'
import { FadeInDown } from './components/FadeInDown/FadeInDown.jsx'

function App() {


  return (
    <>
      <div className='main-container'>
        <FadeInDown>
          <Header/>
        </FadeInDown>
        <PresentacionSlide/>



      </div>
    </>
  )
}

export default App

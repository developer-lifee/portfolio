import { useState } from 'react'
import { Header } from "./components/Header/Header.jsx"
import './App.css'
import { PresentacionSlide } from './components/PresentacionSlide/PresentationSlide.jsx'
import { FadeInDown } from './components/FadeInDown/FadeInDown.jsx'
import { FadeInOnScroll } from './components/FadeInOnScroll/FadeInOnScroll.jsx'
import { FadeInUp } from './components/FadeInUp/FadeInUp.jsx'

function App() {


  return (
    <>
      <div className='main-container'>
        <Header/>
        <PresentacionSlide/>



      </div>
    </>
  )
}

export default App

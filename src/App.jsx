import { useState } from 'react'
import { Header } from "./components/Header/Header.jsx"
import './App.css'
import { PresentacionSlide } from './components/PresentacionSlide/PresentationSlide.jsx'
import { FadeInDown } from './components/FadeInDown/FadeInDown.jsx'
import { FadeInOnScroll } from './components/FadeInOnScroll/FadeInOnScroll.jsx'
import { FadeInUp } from './components/FadeInUp/FadeInUp.jsx'
import { AboutMeSlide } from './components/AboutMeSlide/AboutMeSlide.jsx'
import { LineToRight } from './components/LineToRight/LineToRight.jsx'
import { LineToLeft } from './components/LineToLeft/LineToLeft.jsx'
import { FadeInLeft } from './components/FadeInLeft/FadeInLeft.jsx'
import { TaskTune } from './components/TaskTune/TaskTune.jsx'
import { CatSoul } from './components/CatSoul/CatSoul.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Talk } from './components/Talk/Talk.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Salvatore } from './components/Salvatore/Salvatore.jsx'


function App() {


  return (
    <>
      <div className='main-container'>
          {/* <Header/>
          <PresentacionSlide/>
        <LineToRight/>
          <AboutMeSlide/>
        <LineToLeft/>
        <FadeInOnScroll>
          <p id='featuredProjects'>Featured Projects</p>
        </FadeInOnScroll>
        <LineToRight/>
          <Salvatore/>
        <LineToLeft/>
          <CatSoul/>
        <LineToRight/>
          <TaskTune/>
        <LineToLeft/>
          <Contact/>
        <LineToRight/>
          <Talk/>
        <LineToLeft/>
        <Footer/> */}
      </div>
    </>
  )
}

export default App

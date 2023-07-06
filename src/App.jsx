import { useState } from 'react'
import { Header } from "./components/Header/Header.jsx"
import './App.css'
import { PresentacionSlide } from './components/PresentacionSlide/PresentationSlide.jsx'

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

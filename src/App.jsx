import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'

function App() {
  return (
    <>
    <div className="home-container">
    <Sidebar/>
    <Hero/>
    </div>
    </>
  )
}

export default App

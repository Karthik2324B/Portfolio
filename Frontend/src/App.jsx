import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <Navbar />
        <About />
        <Skills/>
        <Project/>
        <Education/>
        <Contact/>
        <Footer/>
        <Toaster />
      </div>

    </>
  )
}

export default App

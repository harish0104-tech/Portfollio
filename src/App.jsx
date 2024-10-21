import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import ThreeScene from './Components/ThreeScene/threescene'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import ContactForm from './Components/ContactForm/contact'



const App = () => {
  return (
    <div>
     <ThreeScene/>
     <Navbar/>
     <Landing/>
     <Skills/>
    <Education/>
    <ContactForm/>
    </div>
  )
}

export default App



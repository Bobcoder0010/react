import React from 'react'
import { Home } from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NavBar from './components/Navbar'
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      

      </Routes>    


    </div>
  )
}

export default App
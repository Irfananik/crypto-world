import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact';
import CoinDetails from './components/CoinDetails/CoinDetails';
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Singup from './components/Singup/Singup';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Header />
      <Toaster/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coin-details/:id' element={<CoinDetails />} />
        <Route path='/contact' element={<Contact />}>
          <Route path='bd-address' element={<BdAddress />} />
          <Route path='us-address' element={<UsAddress />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

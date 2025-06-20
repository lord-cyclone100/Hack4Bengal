import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import Lenis from "lenis";
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contact } from './pages/Contact';



export const App = () => {
  
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createtournament' element={<Register/>}/>
          <Route path='/login/metamask' element={<Login/>}/>
          <Route path='/dashboard/:id' element={<Contact/>}/>
        </Routes>

      </BrowserRouter>
      {/* <Home/> */}
      <Footer />
    </>
  )
}

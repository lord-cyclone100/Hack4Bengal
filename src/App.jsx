import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Carousel } from './components/Carousel'

export const App = () => {
  return (
    <>
      <div className='flex flex-col gap-8'>
        <Navbar />
        <Carousel />
      </div>
    </>
  )
}

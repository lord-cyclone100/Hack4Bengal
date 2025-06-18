import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Carousel } from './components/Carousel'
import { Card } from './components/Card'

export const App = () => {
  return (
    <>
      <div className='flex flex-col gap-8'>
        <Navbar />
        <Carousel />
        <h1 className='font-game2'>Hello World</h1>
        <Card />
      </div>
    </>
  )
}

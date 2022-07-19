import React from 'react'
import './App.css'
import Header from './components/header'
import Swipebuttons from './components/Swipebuttons'
import Tindercard from './components/tindercard'

function App() {
  return (
    <div className='app'>
      <Header />
      <Tindercard />
      <Swipebuttons />
    </div>
  )
}

export default App

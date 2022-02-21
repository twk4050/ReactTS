import React from 'react'

import './App.scss'

import { Routes, Route } from 'react-router-dom'

import { HomePage, Counter, NavBar } from './components'

function App() {
  return (
    <div className="App">
      {/* <h1> hello world 2 </h1> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/random" element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App

function About() {
  return <div>About</div>
}

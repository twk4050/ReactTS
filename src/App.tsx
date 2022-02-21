import React from 'react'

import './App.scss'

import { Routes, Route } from 'react-router-dom'

import { HomePage, NavBar } from './components'
import { Counter, AddBlog } from './components'
function App() {
  return (
    <div className="App">
      {/* <h1> hello world 2 </h1> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddBlog />} />
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

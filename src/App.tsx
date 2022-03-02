import React from 'react'

import './App.scss'

import { Routes, Route } from 'react-router-dom'

import { HomePage, NavBar } from './components'
import { Cake, AddBlog, CounterSaga, Users, WKHookForm } from './components'
function App() {
    return (
        <div className="App">
            {/* <h1> hello world 2 </h1> */}
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddBlog />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/random"
                    element={
                        <div>
                            {/* <Users />
              <CounterSaga />
              <Cake /> */}
                            <WKHookForm />
                        </div>
                    }
                />
            </Routes>
        </div>
    )
}

export default App

function About() {
    return (
        <div>
            <h1>About Component</h1>
            <h2> learning React </h2>
            <p>implemented TypeScript / React-Router / Redux / Redux-Saga / SASS / CICD deployment on netlify</p>
            <p>To Dos: Cypress E2E testing / deployment on linux </p>
        </div>
    )
}

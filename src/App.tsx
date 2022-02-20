import React from 'react'

import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './state'
import { actionCreators } from './state'

function App() {
  const counter = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1> hello world 2 </h1>

      <h1> {counter.value} </h1>
      <button onClick={() => dispatch(actionCreators.increment(100))}> increment </button>
      <button onClick={() => dispatch(actionCreators.decrement(100))}> decrement </button>
    </div>
  )
}

export default App

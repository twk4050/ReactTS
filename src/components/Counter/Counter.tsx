import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActionCreators, RootState } from '../../state'

export function Counter() {
  const counter = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <p> counter increment or decrement</p>
      <h1>{counter.value}</h1>
      <button onClick={() => dispatch(counterActionCreators.increment(10))}>increment</button>
      <button onClick={() => dispatch(counterActionCreators.decrement(10))}>increment</button>
    </div>
  )
}

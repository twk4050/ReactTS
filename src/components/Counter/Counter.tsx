import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, RootState } from '../../state'

export function Counter() {
  const counter = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <p> counter increment or decrement</p>
      <h1>{counter.value}</h1>
      <button onClick={() => dispatch(actionCreators.increment(10))}>increment</button>
      <button onClick={() => dispatch(actionCreators.decrement(10))}>increment</button>
    </div>
  )
}

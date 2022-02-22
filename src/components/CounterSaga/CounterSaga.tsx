import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSagaActionCreators, RootState } from '../../state'

export function CounterSaga() {
  const counter = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1> Counter Saga Component </h1>
      <p> {counter.value} </p>
      <button onClick={() => dispatch(counterSagaActionCreators.increment(2))}> INCREMENT </button>
      <button onClick={() => dispatch(counterSagaActionCreators.decrement(2))}> DECREMENT </button>
      <button onClick={() => dispatch(counterSagaActionCreators.async123())}> INCREMENT_ASYNC </button>
    </div>
  )
}

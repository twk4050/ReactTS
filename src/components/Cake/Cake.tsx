import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeActionCreator, RootState } from '../../state'

export function Cake() {
  const cake = useSelector((state: RootState) => state.cake)
  const dispatch = useDispatch()

  return (
    <div>
      <p> Cake Component</p>
      <h1>{cake.numOfCakes}</h1>
      <button onClick={() => dispatch(cakeActionCreator.buyCake(10))}>buy cake</button>
      <button onClick={() => dispatch(cakeActionCreator.sellCake(10))}>eat cake</button>
    </div>
  )
}

import { ActionType } from '../action-types'
// import { Dispatch } from 'redux'
// import { Action } from '../actions'

export const buyCake = (amount: number) => {
  return {
    type: ActionType.BUY_CAKE,
    payload: amount,
  }
}

export const sellCake = (amount: number) => {
  return {
    type: ActionType.SELL_CAKE,
    payload: amount,
  }
}

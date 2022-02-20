import { ActionType } from '../action-types'
import { Dispatch } from 'redux'
import { Action } from '../actions'

export const increment = (amount: number) => {
  return {
    type: ActionType.INCREMENT,
    payload: amount,
  }
}

export const decrement = (amount: number) => {
  return {
    type: ActionType.DECREMENT,
    payload: amount,
  }
}

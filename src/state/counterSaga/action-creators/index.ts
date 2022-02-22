import { ActionType, Action } from '../types'

export const increment = (value: number): Action => {
  return {
    type: ActionType.INCREMENT,
    payload: value,
  }
}

export const decrement = (value: number): Action => {
  return {
    type: ActionType.DECREMENT,
    payload: value,
  }
}

export const async123 = (): Action => {
  return {
    type: ActionType.INCREMENT_ASYNC,
  }
}

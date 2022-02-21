import { Action } from '../actions'
import { ActionType } from '../action-types'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 130,
}

export const counterReducer = (state: CounterState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      }

    case ActionType.DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      }
    default:
      return state
  }
}

import { ActionType, CounterState, Action } from '../types'

const initialState: CounterState = {
  value: 300,
}

export const counterReducer = (state: CounterState = initialState, action: Action): CounterState => {
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

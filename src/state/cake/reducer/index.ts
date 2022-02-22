import { Action } from '../actions'
import { ActionType } from '../action-types'

interface cakeState {
  numOfCakes: number
}

const initialState: cakeState = {
  numOfCakes: 1,
}

export const cakeReducer = (state: cakeState = initialState, action: Action): cakeState => {
  switch (action.type) {
    case ActionType.BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      }

    case ActionType.SELL_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      }
    default:
      return state
  }
}

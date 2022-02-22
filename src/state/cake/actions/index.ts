import { ActionType } from '../action-types'

interface IncrementAction {
  type: ActionType.BUY_CAKE
  payload: number
}

interface DecrementAction {
  type: ActionType.SELL_CAKE
  payload: number
}

export type Action = IncrementAction | DecrementAction

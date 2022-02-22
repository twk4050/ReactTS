export enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  INCREMENT_ASYNC = 'INCREMENT_ASYNC',
}

interface IncrementAction {
  type: ActionType.INCREMENT
  payload: number
}

interface DecrementAction {
  type: ActionType.DECREMENT
  payload: number
}

interface IncrementAsyncAction {
  type: ActionType.INCREMENT_ASYNC
}

export type Action = IncrementAction | DecrementAction | IncrementAsyncAction

export interface CounterState {
  value: number
}

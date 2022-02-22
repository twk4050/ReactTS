import { Action, ActionType } from '../types'

export const getUsersRequest = (): Action => {
  return {
    type: ActionType.GET_USERS_REQUEST,
  }
}

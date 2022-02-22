import { Action, ActionType, UsersState } from '../types'

// randomly added in for generics
interface Users {
  id: number
  name: string
}

const initialUsersState: UsersState<Users> = {
  loading: false,
  data: [],
  error: '',
}

export const usersReducer = (state: UsersState<Users> = initialUsersState, action: Action): UsersState<Users> => {
  switch (action.type) {
    case ActionType.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionType.GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case ActionType.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    default:
      return state
  }
}

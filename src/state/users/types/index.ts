// referencing from counterSaga
/*
    Types should contain
    - ActionType enum
    - Action interface / type { type: string }
    - interface initialState , usersState
*/

export enum ActionType {
  GET_USERS_REQUEST = 'GET_USERS_REQUEST',
  GET_USERS_ERROR = 'GET_USERS_ERROR',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
}

// interface GetUsersRequestAction {
//   type: string
// }

// interface GetUsersErrorAction {
//   type: string
//   payload: string
// }

// interface GetUsersSuccessAction {
//   type: string
//   payload: string
// }

// export type Action = GetUsersRequestAction | GetUsersErrorAction | GetUsersSuccessAction

interface GetUsersAction {
  type: string
  payload?: any // either error.msg or array of users Object
}
export type Action = GetUsersAction

export interface UsersState<T> {
  loading: boolean
  data: Array<T>
  error: ''
}

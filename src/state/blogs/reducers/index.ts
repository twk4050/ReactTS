import { Action } from '../actions'
import { BlogState, ActionType } from '../action-types'

const initialState: BlogState = [
  {
    title: 'title1',
    body: 'initialized Blog 1',
  },
]

export const blogsReducer = (state: BlogState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_BLOG:
      return [...state, action.payload]

    // case ActionType.DEL_BLOG:
    //     return [...state]
    default:
      return state
  }
}

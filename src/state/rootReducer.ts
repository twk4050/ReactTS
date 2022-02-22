import { combineReducers } from 'redux'

import { cakeReducer } from './cake'
import { blogsReducer } from './blogs'
import { counterReducer } from './counterSaga'
import { usersReducer } from './users'

const rootReducer = combineReducers({
  cake: cakeReducer,
  blogs: blogsReducer,

  counter: counterReducer,
  users: usersReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

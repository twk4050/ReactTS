import { combineReducers } from 'redux'

import { counterReducer } from './counter'
import { blogsReducer } from './blogs'

const rootReducer = combineReducers({
  counter: counterReducer,
  blogs: blogsReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

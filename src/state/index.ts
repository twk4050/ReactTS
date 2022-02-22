export * from './store'
export * from './rootReducer' // rootReducer , type RootState
export { actionCreators as cakeActionCreator } from './cake' // all folder in 'state' has standard templates
// example { actionCreators as iceCreamActionCreators } from './icecream' if there is
export { actionCreators as blogsActionCreators } from './blogs'
export { actionCreators as counterSagaActionCreators } from './counterSaga'
export { actionCreators as usersActionCreators } from './users'

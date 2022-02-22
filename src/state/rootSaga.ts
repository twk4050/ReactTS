import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from './counterSaga/sagas'
import { watchGetUsersRequest } from './users/sagas' // ???

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchGetUsersRequest()])
}

/*
  1) (eventListener) watch for type 'INCREMENT_ASYNC'
  2) if (event) => cb(), incrementAsync()
  3) 
*/

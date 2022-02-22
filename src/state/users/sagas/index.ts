// import { put, takeEvery } from 'redux-saga/effects'

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

// function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT', payload: 100 })
//   yield put({ type: 'INCREMENT', payload: 111 })
// }

// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

import { call, put, takeLatest } from 'redux-saga/effects'
import { ActionType } from '../types'

import axios from 'axios'

// requests
function fetchUser(): any {
  console.log('here')
  const URL = 'https://jsonplaceholder.typicode.com/users'
  return axios
    .get(URL)
    .then((response) => response)
    .catch((e: Error) => {
      throw e
    })
}
interface ResponseGenerator {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

// handler
function* handleGetUsersRequest() {
  try {
    const response: ResponseGenerator = yield call(fetchUser) // fetchUser => returns a promise, yield it
    // console.log(response)

    yield put({ type: ActionType.GET_USERS_SUCCESS, payload: response.data })
  } catch (e: Error | any | unknown) {
    yield put({ type: ActionType.GET_USERS_ERROR, payload: e.message })
  }
}

export function* watchGetUsersRequest() {
  yield takeLatest(ActionType.GET_USERS_REQUEST, handleGetUsersRequest)
}

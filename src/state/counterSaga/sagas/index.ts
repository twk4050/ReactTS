import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT', payload: 100 })
  yield put({ type: 'INCREMENT', payload: 111 })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

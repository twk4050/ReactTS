import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, usersActionCreators } from '../../state'

export function Users() {
  const users = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(usersActionCreators.getUsersRequest())
  // }, [])
  return (
    <div>
      <h1> Users Component (saga) </h1>
      <button onClick={() => dispatch(usersActionCreators.getUsersRequest())}> click to fetchUsers! </button>
      {users.loading ? (
        <h2> Loading </h2>
      ) : users.error ? (
        <h2>{users.error}</h2>
      ) : (
        <div>
          {/* <h2> User List </h2> */}
          {/* <div>{users && users.data && users.data.map((user: ) => <p>{user.name}</p>)}</div> */}
          <div>{users && users.data && users.data.map((user) => <p>{user.name}</p>)}</div>
        </div>
      )}
    </div>
  )
}

import React from 'react'

import './navbar.scss'

import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <div className="wknav">
      <ul>
        <li>
          <Link to="/">Home</Link>{' '}
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/random">Random</Link>
        </li>
      </ul>
    </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state'

export function HomePage() {
  const blogs = useSelector((state: RootState) => state.blogs)

  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        ))}
    </div>
  )
}

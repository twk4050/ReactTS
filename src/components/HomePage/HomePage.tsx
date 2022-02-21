import React from 'react'

export function HomePage() {
  interface Blog {
    title: string
    body: string
  }
  const blogs: Blog[] = [
    {
      title: 'title1',
      body: 'this is my first blog body',
    },
    {
      title: 'title2',
      body: 'this is my 2nd blog body',
    },
  ]
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

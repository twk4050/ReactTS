import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogsActionCreators, RootState } from '../../state'
import { Blog } from '../../state/blogs/action-types'

const defaultFormData = {
  title: '',
  body: '',
}
export function AddBlog() {
  const [formData, setFormData] = useState<Blog>(defaultFormData)
  const dispatch = useDispatch()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('formdata', formData)
    e.preventDefault()
    dispatch(blogsActionCreators.addBlog(formData))
    setFormData(defaultFormData)
  }
  return (
    <div>
      <h1> Add Blog Component </h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="title"></label>
        <input type="text" id="title" placeholder="title" value={formData.title} required onChange={onChange}></input>
        <br />
        <label htmlFor="body"></label>
        <input type="text" id="body" placeholder="body" value={formData.body} required onChange={onChange}></input>

        <br />
        <button type="submit">Add Blog</button>
        {/* <button onClick={() => dispatch(blogsActionCreators.addBlog(mockInput))}>Add Blog</button> */}
      </form>
    </div>
  )
}

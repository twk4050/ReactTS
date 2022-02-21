import { ActionType, Blog } from '../action-types'

export const addBlog = (blog: Blog) => {
  return {
    type: ActionType.ADD_BLOG,
    payload: blog,
  }
}

// export const delBlog = () => {
//   return {
//     type: ActionType.DEL_BLOG,
//     payload: blogIndex,
//   }
// }

import { ActionType, Blog, BlogState } from '../action-types'

interface AddBlogAction {
  type: ActionType.ADD_BLOG
  payload: Blog
}

interface DelBlogAction {
  type: ActionType.DEL_BLOG
  payload: number
}

export type Action = AddBlogAction | DelBlogAction

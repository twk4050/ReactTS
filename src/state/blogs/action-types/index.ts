export enum ActionType {
  ADD_BLOG = 'ADD_BLOG',
  DEL_BLOG = 'DEL_BLOG',
}

export interface Blog {
  title: string
  body: string
}

export type BlogState = Blog[]

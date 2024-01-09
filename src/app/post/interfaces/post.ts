export interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags: PostTags
  reactions: number
}

export type PostTags = string[];

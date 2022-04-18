import { get } from '@/utils/index'

export interface BlogListItem {
  content: string
  create_time: number
  desc: string
  like_count: number
  tag: string
  title: string
  update_time: number
  view_count: number
  id: number
}

export const getBlogList = (params?: Record<string, any>) =>
  get('/blog_api/blog/list', params) as Promise<BlogListItem[]>

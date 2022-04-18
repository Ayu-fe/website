import * as React from 'react'
import { BlogListItem } from '@/api/blog'
import style from './index.less'
import { history } from 'umi'

type IProps = {
  data: BlogListItem
}

const BlogCard: React.FC<IProps> = (props) => {
  const { data } = props
  const handleClick = () => {
    history.push(`/blog/article/`, { id: data.id })
  }
  return (
    <div className={style.cardContainer} onClick={handleClick}>
      <div className={style.left}>
        <img
          className={style.image}
          src="https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg"
          alt=""
        />
      </div>
      <div className={style.right}>
        <div className={style.title}>{data.title}</div>
        <div className={style.content}>{data.desc}</div>
      </div>
    </div>
  )
}

export default BlogCard

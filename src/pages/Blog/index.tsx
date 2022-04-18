import * as React from 'react'
import styles from './index.less'
import clsx from 'clsx'
import { SearchOutlined } from '@ant-design/icons'
import { getBlogList, BlogListItem } from '@/api/blog'
import BlogCard from '@/components/BlogCard'

const Blog = () => {
  const [focus, setFocus] = React.useState<boolean>(false)
  const [inputVal, setInpuVal] = React.useState<string>('')
  const [blogList, setBlogList] = React.useState<BlogListItem[]>([])

  const onSearch = (value: string) => {
    console.log(value)
  }

  const handleFocus = () => {
    setFocus(true)
  }
  const handleBlur = () => {
    setFocus(false)
  }

  React.useEffect(() => {
    getBlogList().then((res) => {
      console.log(res)
      setBlogList(res)
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={clsx(styles.bg, focus && styles.bgBlur)}
          src={require('@/static/image/blog_bg.png')}
          alt=""
        />
        <div className={clsx(styles.search, focus && styles.searchFocus)}>
          <input
            className={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setInpuVal(e.target.value)}
            placeholder={focus ? '' : '搜你想搜'}
            type="text"
            value={inputVal}
          />
          {focus && (
            <div className={styles.searchBtn}>
              <SearchOutlined />
            </div>
          )}
        </div>
        {focus && <div className={styles.title}>这里的故事，有你一页</div>}
      </div>
      <div className={styles.content}>
        <div className={styles.left}></div>
        <div className={styles.mid}>
          {blogList.map((item) => (
            <BlogCard key={item.title} data={item} />
          ))}
        </div>
        <div className={styles.right}>
          <div className={styles.rightContent}>这里是一些其他的东西</div>
          <div className={styles.rightContent}>这里是一些其他的东西</div>
        </div>
      </div>
    </div>
  )
}

export default Blog

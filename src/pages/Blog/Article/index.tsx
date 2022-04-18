import * as React from 'react'
import styles from './index.less'
import clsx from 'clsx'
import showdown from 'showdown'

const Article = () => {
  const [__html, setHtml] = React.useState('')

  React.useEffect(() => {
    const converter = new showdown.Converter()
    const text = `# 什么是爱情？\n## 爱情的本质是什么\n1. 爱情是一种美好的事情，是一种美好的人生。\n2. 明明和家人朋友在一起会更加快乐\n\n> 列夫托尔斯泰说过：“爱情是一种美好的事情，是一种美好的人生。”
    
    我很喜欢敲代码
    `
    const html = converter.makeHtml(text)
    setHtml(html)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={clsx(styles.bg)}
          src={require('@/static/image/blog_bg.png')}
          alt=""
        />
      </div>
      <div className={styles.content}>
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{ __html }}
        ></div>
      </div>
    </div>
  )
}

export default Article

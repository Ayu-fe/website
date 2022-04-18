import * as React from 'react'
import clsx from 'clsx'
import showdown from 'showdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css'
import { history } from 'umi'
import { getBlogById } from '@/api/blog'
import { Input } from 'antd'
import styles from './index.less'

const { TextArea } = Input

const Article = () => {
  const [__html, setHtml] = React.useState('')
  const [textValue, setTextValue] = React.useState('')

  React.useEffect(() => {
    // 发送请求取到id对应的内容
    console.log(history)
    const { id } = (history.location.state as { id: number }) || { id: 0 }
    getBlogById({ id }).then((res) => {
      setTextValue(res?.content || '')
    })
  }, [])

  React.useEffect(() => {
    const converter = new showdown.Converter({
      tables: true,
    })
    const html = converter.makeHtml(textValue)
    setHtml(html)
  }, [textValue])

  React.useEffect(() => {
    document.querySelectorAll('pre')?.forEach((block) => {
      try {
        hljs.highlightBlock(block)
      } catch (e) {
        console.log(e)
      }
    })
  }, [__html])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={clsx(styles.bg)}
          src={require('@/static/image/blog_bg.png')}
          alt=""
        />
      </div>
      {/* <TextArea style={{ width: 900 }}></TextArea> */}
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

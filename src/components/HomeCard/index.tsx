import * as React from 'react'
import style from './index.less'
import { history } from 'umi'

interface IHomeCardProps {
  title: string
  pic_link: string
  content: string
  type: 'left' | 'right'
  to_link: string
  jump_text: string
}

const HomeCard: React.FC<IHomeCardProps> = (props) => {
  const { title, pic_link, content, type, jump_text, to_link } = props

  const handleJump = () => {
    history.push(to_link)
  }

  return (
    <div className={style.cardContainer}>
      {type === 'left' ? (
        <>
          <div className={style.left}>
            <img
              width="100%"
              height="100%"
              style={{ objectFit: 'contain' }}
              src={pic_link}
              alt="图片"
            />
          </div>
          <div className={style.right}>
            <div className={style.title}>{title}</div>
            <div className={style.content}>{content}</div>
            <div className={style.btn} onClick={handleJump}>
              {jump_text}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={style.right}>
            <div className={style.title}>{title}</div>
            <div className={style.content}>{content}</div>
            <div className={style.btn} onClick={handleJump}>
              {jump_text}
            </div>
          </div>
          <div className={style.left}>
            <img
              width="100%"
              height="100%"
              style={{ objectFit: 'contain' }}
              src={pic_link}
              alt="图片"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default HomeCard

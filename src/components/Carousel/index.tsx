import * as React from 'react'
import style from './index.less'

export interface ICard {
  title: string
  link: string
}

export interface ICarouselParams {
  cards: ICard[]
}

const Carousel: React.FC<ICarouselParams> = (props) => {
  const { cards } = props
  return (
    <div className={style.carouselContainer}>
      <div className={style.content}>
        {cards.map((item) => (
          <div>
            <div>
              <img className={style.img} src={item.link} alt="" />
            </div>
            <div className={style.title}>{item.title}</div>
          </div>
        ))}
      </div>
      <div className={style.content}>
        {cards.map((item) => (
          <div>
            <div>
              <img className={style.img} src={item.link} alt="" />
            </div>
            <div className={style.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel

import styles from './index.less'
import HomeCard from '@/components/HomeCard'
import Carousel, { ICard } from '@/components/Carousel'
import { Button } from 'antd'
import * as React from 'react'

export default function IndexPage() {
  // 未来这个页面的所有内容都应该是可配置的
  const [cards, setCards] = React.useState<ICard[]>([
    {
      title: '这是小帅和他的老婆',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW38i8vEkmtiAmExSeA2_6fkhxmLG6S_OTAg&usqp=CAU',
    },
    {
      title: '这是小帅和他的老婆',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0RbhohPRLH7hMA2lG0SigxYtrZzLejijMw&usqp=CAU',
    },
    {
      title: '这是小帅和他的老婆',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW38i8vEkmtiAmExSeA2_6fkhxmLG6S_OTAg&usqp=CAU',
    },
    {
      title: '这是小帅和他的老婆',
      link: 'https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg',
    },
  ])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.titleTop}>
            <div className={styles.title}>这里的故事，有你一页</div>
            <div className={styles.content}>
              商米与商家的故事，可以看作一本故事书，商米的设备为不同地区的商家解决了很多环境、地域、效率等问题。我们希望通过更专业的设备，更完整的解决方案为商家们打造专属的商业环境我们是商米，谢谢你把我们带到了世界各地。
            </div>
            <div className={styles.from}>—— 我爱罗</div>
          </div>
          <div className={styles.titleBottom}></div>
        </div>
      </div>
      <div className={styles.module}>
        {/* <HomeCard
          title="商米的设备"
          content="关于你啊结束打卡嘉陵道街烂打本会计啊啥的空间爱打瞌睡吧啊看见的刷卡机看见啊好开森都不卡加班快就把深刻的啊可敬可嘉，沙嗲阿布阿的不阿斯顿哈哈卡迪爸爸侃大山打卡很大很大就啊的空间啊活动空间阿花看见都好啊科技活动看看好愧疚啊还得上课就好卡好"
          pic_link="https://img95.699pic.com/photo/40094/7630.jpg_wh300.jpg"
          type="left"
          to_link="/blog"
          jump_text="查看更多"
        ></HomeCard> */}

        <HomeCard
          title="商米的设备"
          content="关于你啊结束打卡嘉陵道街烂打本会计啊啥的空间爱打瞌睡吧啊看见的刷卡机看见啊好开森都不卡加班快就把深刻的啊可敬可嘉，沙嗲阿布阿的不阿斯顿哈哈卡迪爸爸侃大山打卡很大很大就啊的空间啊活动空间阿花看见都好啊科技活动看看好愧疚啊还得上课就好卡好"
          pic_link="https://cdn.pixabay.com/photo/2013/05/12/18/55/balance-110850__480.jpg"
          type="right"
          to_link="/blog"
          jump_text="敬请期待"
        ></HomeCard>
      </div>
      {/* <div className={styles.pic}>
        <Carousel cards={cards}></Carousel>
      </div> */}
      <div className={styles.callMe}>
        {/* <div>联系我</div>
        <div>QQ: 1979474549</div>
        <div>微信: 13065071223</div>
        <div>电话: 13065071223</div> */}
        {/* <div>欢迎和我成为朋友</div> */}
      </div>
    </div>
  )
}

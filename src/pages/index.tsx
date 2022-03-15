import styles from './index.less'
import { Button } from 'antd'

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={require('../static/image/Bg.png')}
          alt=""
          style={{ objectFit: 'cover' }}
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.module}></div>
      <div className={styles.pic}></div>
      <div className={styles.callMe}></div>
    </div>
  )
}

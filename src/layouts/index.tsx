import { IRouteComponentProps } from 'umi'
import { Layout, Menu } from 'antd'
import style from './index.less'

const { Header, Footer, Content } = Layout

export default function UmiLayout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  const handleClick = (item: Record<string, any>) => {
    history.push(item.key)
  }

  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <Menu
          defaultSelectedKeys={['/']}
          mode="horizontal"
          className={style.menu}
          onClick={handleClick}
        >
          <Menu.Item key="/">首页</Menu.Item>
          <Menu.Item key="/blog">技术博客</Menu.Item>
          <Menu.Item key="/life">生活随笔</Menu.Item>
          <Menu.Item key="/music_blog">音乐与我</Menu.Item>
          <Menu.Item key="/brove">奇思妙想</Menu.Item>
        </Menu>
      </Header>
      <Content className={style.content}>{children}</Content>
      <Footer className={style.footer}>Footer</Footer>
    </Layout>
  )
}

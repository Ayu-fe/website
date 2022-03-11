import { IRouteComponentProps } from 'umi'
import { Layout } from 'antd'
import style from './index.less'

const { Header, Footer, Content } = Layout

export default function UmiLayout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <Layout>
      <Header className={style.header}>Header</Header>
      <Content className={style.content}>{children}</Content>
      <Footer className={style.footer}>Footer</Footer>
    </Layout>
  )
}

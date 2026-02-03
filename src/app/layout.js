import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'YONGHENGWEI | 按摩·理疗·放松',
  description: 'YONGHENGWEI 按摩店 - 专注于舒缓放松与经络调理的本地服务',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import Banner from '@/components/banner'
import Container from '@/components/container'
import MainContent from '@/components/main-left'
import Sidebar from '@/components/side-bar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của Productic, được tạo bởi Được dev'
}

export default function Home() {
  return (
    <main>
      <Banner />
      <Container>
        <div className="flex gap-8">
          <MainContent />
          <Sidebar />
        </div>
      </Container>
    </main>
  )
}
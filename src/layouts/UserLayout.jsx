import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ScrollToTop from '@/components/ScrollToTop'

const UserLayout = () => {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout

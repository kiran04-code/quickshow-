import React from 'react'
import Footer from '../../components/Footer'
import Navbar from './components/AdminNavbar'
import Dashboad from './Dashboad'
import Sidebar from './components/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar/>
    <div className=' flex'>
        <div>
            <Sidebar/>
        </div>
        <div className='flex -1 px-4 py-10 md:px-10 h-[calc(100vh-640px)] overflow-y-auto'>
            <Outlet/>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Layout

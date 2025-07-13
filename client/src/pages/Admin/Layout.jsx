import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from './components/AdminNavbar'
import Dashboad from './Dashboad'
import Sidebar from './components/AdminSidebar'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'

const Layout = () => {
    const [isLoading,setLoading] = useState(false)
  return (
    <div>
        <Navbar/>
    <div className=' flex'>
        <div>
            <Sidebar/>
        </div>
        <div className='flex-1 px-4  md:px-10 h-screen overflow-y-auto'>
           {isLoading ? <Loading/>: <Outlet/>}
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Layout

import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import './App.css'
import Homepage from './pages/Homepage';
import MoviesDetails from './pages/moviesDetails';
import Movies from './pages/Movies';
import SeatsLayout from './pages/SeatsLayout';
import MyBokking from './pages/MyBokking';
import Favorite from './pages/Favorite';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import {Toaster} from "react-hot-toast"
import Layout from './pages/Admin/Layout';
import Dashboad from './pages/Admin/Dashboad';
import AddShow from './pages/Admin/addshow';
import ListShow from './pages/Admin/ListShow';
import ListBooking from './pages/Admin/ListBooking';

function App() {
  const isAdmin = useLocation().pathname.startsWith("/admin")

  return (
    <div>
  <Toaster/>
     {
      isAdmin ? null: <Navbar/>
     }
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/MoviesDetails/:id' element={<MoviesDetails/>} />
        <Route path='/Movies' element={<Movies/>} />
        <Route path='/Movies/:id/:date' element={<SeatsLayout/>} />
        <Route path='/MyBokking' element={<MyBokking/>} />
        <Route path='/Favorite' element={<Favorite/>} />
      <Route path='/admin/*' element={<Layout/>} >
        <Route index element ={<Dashboad/>}/>
        <Route  path ="add-show" element ={<AddShow/>}/>
        <Route  path="List-Show" element ={<ListShow/>}/>
        <Route  path="List-Booking" element ={<ListBooking/>}/>
        </Route>
      </Routes>
     {  
      !isAdmin && <Footer/>
     }
     
    </div>
  )
}

export default App;

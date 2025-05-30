import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Collection from './pages/Collection'
import Home from './pages/home'
import About from './pages/about'
import Cart from './pages/cart'
import Contact from './pages/Contact'
import Login from './pages/login'
import Orders from './pages/orders'
import PlaceOrder from './pages/placeOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeholder' element={<PlaceOrder/>}/>
        <Route path='/product/:profuctId' element={<Product/>}/>
      </Routes>

      <Footer />

    </div>
  )
}

export default App

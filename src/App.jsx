import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './Component/ProductDetails'
import Home from './Component/Home'
import BlogProducts from './Component/BlogProducts'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import MyAccount from './Component/MyAccount'
import Cart from './Component/Cart'

function App() {
  return (
    <div className='bg-color1 w-screen h-fit min-h-screen overflow-hidden relative'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ProductDetails />} />
          <Route path='/blog' element={<BlogProducts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<MyAccount />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <div className='text-center font-sans text-[12px] pb-3'>Copyright 2021 | All Rights Reserved.</div>
      </BrowserRouter>
    </div>
  )
}

export default App

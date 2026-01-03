import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Collection from './pages/collection';
import About from './pages/About';
import Contact from './pages/contact';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vm]'>
      <Navbar/>
<Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collection' element={<Collection/>}></Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/order' element={<Order/>}/>
</Routes>

    </div>
  )
}

export default App
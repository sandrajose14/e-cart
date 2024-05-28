

import './App.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App

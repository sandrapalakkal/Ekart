
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import View from './Pages/View'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:id/view' element={<View />} />
        {/* page not found */}
        <Route path='/*' element={<Navigate to={'/'}/>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App

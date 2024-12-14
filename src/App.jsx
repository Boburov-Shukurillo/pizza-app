import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cupons from './pages/Cupons'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { useState } from 'react'
import { menu } from './data/data'

const App = () => {
  const [data, setData] = useState([...menu])
  const [cart, setCart] = useState([])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/menu' element={<Menu setCart={setCart} data={data} setData={setData} />} />
        <Route path='/cupons' element={<Cupons />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart data={data} cart={cart} setCart={setCart} setData={setData} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
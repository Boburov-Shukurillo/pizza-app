import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cupons from './pages/Cupons'
import Contact from './pages/Contact'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cupons' element={<Cupons />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
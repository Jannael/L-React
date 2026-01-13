import { HomePage } from './pages/HomePage.jsx'
import './App.css'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import { Orders } from './pages/orders.jsx'
import { Tracking } from './pages/tracking.jsx'

function App () {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<Orders />} />
      <Route path='tracking' element={<Tracking />} />
    </Routes>
  )
}

export default App

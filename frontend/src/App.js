import React from 'react'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Product from './customer/components/Product/product' // Assuming 'Product' is the correct component name
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Footer from './customer/components/Footer/Footer'
import Checkout from './customer/components/Checkout/Checkout'
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails'
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './Routers/CustomerRoutes'
const App = () => {
  return (
    <>


<Routes>
  <Route path='/*' element={<CustomerRoutes/>}/>
</Routes>

       
            
            
            </>
  )
}

export default App

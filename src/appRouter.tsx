import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Login from './components/Login'

import Details from './pages/Details'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Security from './security/security'

// import components

// Security



export const routes =
    <BrowserRouter>
        <ToastContainer />
        <Routes>
            <Route path='/' element={<Login />} />                  
            <Route path='/products' element={<Security component={<Products />} />} />
           <Route path='/orders' element={<Security component={<Orders />} />} />
           <Route path='/details/:pid' element={<Security component={<Details />} />} />
       
        </Routes>
    </BrowserRouter>

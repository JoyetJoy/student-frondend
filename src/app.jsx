import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/user/userlogin'
import Signup from './pages/user/usersignup'
import Navbar from './components/navbar'
import Userhome from './pages/user/userhome'
import AdminLogin from './pages/admin/login'
import AdminSignup from './pages/admin/signup'

function app() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/userhome' element={<Userhome/>}/>
        <Route path='/admin/signup' element={<AdminSignup/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default app

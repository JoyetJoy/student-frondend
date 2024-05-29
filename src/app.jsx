import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/user/userlogin'
import Signup from './pages/user/usersignup'
import Navbar from './components/navbar'
import Userhome from './pages/user/userhome'
import AdminLogin from './pages/admin/login'
import AdminSignup from './pages/admin/signup'
import Adminhome from './pages/admin/adminhome'
import Addcourse from './pages/admin/addcourse'
import Admincourses from './pages/admin/coursespage'

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
        <Route path='/admin/adminhome' element={<Adminhome/>}/>
        <Route path='/admin/addcourse' element={<Addcourse/>}/>
        <Route path='/admin/courses' element={<Admincourses/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default app

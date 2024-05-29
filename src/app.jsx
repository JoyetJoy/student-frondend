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
import Editcourse from './pages/admin/editcourse'
import Landing from './pages/landingpage'
import Useraccount from './pages/user/useraccount'
import EditProfile from './pages/user/editprofile'

function app() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/user/login" element={<Login />} />
        <Route path='/user/signup' element={<Signup/>}/>
        <Route path='/user/userhome' element={<Userhome/>}/>
        <Route path='/user/account/:id' element={<Useraccount/>}/>
        <Route path='/user/editprofile/:id' element={<EditProfile/>}/>
        <Route path='/admin/signup' element={<AdminSignup/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/adminhome' element={<Adminhome/>}/>
        <Route path='/admin/addcourse' element={<Addcourse/>}/>
        <Route path='/admin/courses' element={<Admincourses/>}/>
        <Route path='/admin/editcourse/:id' element={<Editcourse/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default app

import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Myposts from './Components/Myposts'
import Singlepost from './Components/Singlepost'
import { Mysinglepost } from './Components/Mysinglepost'
import Createpost from './Components/Createpost'
import Adminpage from './Components/Adminpage'
import Seeuser from './Components/Seeuser'
import Myapplications from './Components/Myapplications'
import Messenger from './Components/Messenger'
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/Home' element={<LandingPage/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/adminpanel' element={<Adminpage/>}/>
          <Route path='/messenger/:id' element={<Messenger/>}/>
          <Route path='/myapplications/:id' element={<Myapplications/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='signup'element={<Signup/>}/>
          <Route path='/createpost/:id' element={<Createpost/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/mypost' element={<Myposts/>}/>
          <Route path='/singlepost/:id' element={<Singlepost/>}/>
          <Route path='mysinglepost/:id' element={<Mysinglepost/>}/>
          <Route path='/seeuser/:id' element={<Seeuser/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import{ Routes,Route } from 'react-router-dom'
import Login from './Components/Admin/Login'
import Signup from './Components/Admin/Signup'
import AdminUser from './Components/Admin/AdminUserInformation'
import Individual from './Components/Admin/getIndividual'
import UpdateAdmin from './Components/Admin/updateAdmin'

import Home from './Components/Admin/Homepage'
import Navbar from './Components/Admin/navbar'


const App=()=>{
  return(
    <>
        <Navbar/>
        <Routes>
          <Route  path="/Login" element={<Login />}/>
          <Route  path="/SignUp" element={<Signup />}/>
          <Route  path='/AdminUser' element={<AdminUser/>}/>
          <Route  path='/IndividualAdmin/:id' element={<Individual/>}/>
          <Route  path='/UpdateAdmin/:id' element={<UpdateAdmin/>}/>
          <Route  path="/" element={<Home />}/>
        </Routes> 
      
    </>
  )
}
export default App;

import React from 'react'
import{ Routes,Route } from 'react-router-dom'
import Login from './Components/Admin/Login'
import Signup from './Components/Admin/Signup'
import AdminUser from './Components/Admin/AdminUserInformation'
import Individual from './Components/Admin/getIndividual'
import UpdateAdmin from './Components/Admin/updateAdmin'


import SellerUser from './Components/Seller/SellerUser'
import IndividualSeller from './Components/Seller/IndividualSeller'
import UpdateSeller from './Components/Seller/updateSeller'

import Home from './Components/Homepage'
import Navbar from './Components/navbar'


const App=()=>{
  return(
    <>
        <Navbar/>
        <Routes>
          <Route  path="/" element={<Home />}/>

          <Route  path="/Login" element={<Login />}/>
          <Route  path="/SignUp" element={<Signup />}/>
          <Route  path='/AdminUser' element={<AdminUser/>}/>
          <Route  path='/IndividualAdmin/:id' element={<Individual/>}/>
          <Route  path='/UpdateAdmin/:id' element={<UpdateAdmin/>}/>

          <Route  path='/SellerUser' element={<SellerUser/>}/>
          <Route  path='/IndividualSeller/:id' element={<IndividualSeller/>}/>
          <Route  path='/UpdateSeller/:id' element={<UpdateSeller/>}/>


          
        </Routes> 
      
    </>
  )
}
export default App;

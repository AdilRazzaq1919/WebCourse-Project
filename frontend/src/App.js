import React from 'react'
import{ Routes,Route } from 'react-router-dom'
import Login from './Components/Admin/Login'
import Signup from './Components/Admin/Signup'
import AdminUser from './Components/Admin/AdminUserInformation'
import Individual from './Components/Admin/getIndividual'
import UpdateAdmin from './Components/Admin/updateAdmin'


const App=()=>{
  return(
    <>
        <Routes>
          <Route   path="/Login" element={<Login />}/>
          <Route   path="/SignUp" element={<Signup />}/>
          <Route  path='/AdminUser' element={<AdminUser/>}/>
          <Route  path='/IndividualAdmin/:id' element={<Individual/>}/>
          <Route  path='/UpdateAdmin/:id' element={<UpdateAdmin/>}/>


        </Routes> 
      
    </>
  )
}
export default App;

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom' 
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

import logo from '../Images/Update.jpg'

const UpdateSeller=()=>{

    const navigate=useNavigate();
    
  const [Seller, setSeller]=useState({
    firstName:"",lastName:"", email:"",

  })
  const {id}=useParams();
  let name, value;
  const setData=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setSeller({...Seller,[name]:value});
  }

  const postData= (e)=>{


    e.preventDefault();

    const obj={
      firstName:Seller.firstName,
      lastName:Seller.lastName,
      email:Seller.email,    }
    axios.put(`http://localhost:3001/seller/updateSeller/${id}`,obj)
    .then(res=>{
      window.alert(" Seller Information Updated Successfully")
      navigate('/SellerUser')
   }).catch(function (error) {
      if (error.response) {
        window.alert(error.response.data.error);
      }
    });
}
  return(
    <MDBContainer fluid>

    <MDBCard className='text-black m-5 mt-5 admin' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Seller</h2>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Your Name' name='firstName' id='name' type='text'className='w-100' 
              value={Seller.firstName}
              onChange={setData}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Your Name' name='lastName' id='name' type='text'className='w-100' 
              value={Seller.lastName}
              onChange={setData}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' name='email' id='email' type='text'
              value={Seller.email}
              onChange={setData}
              />
            </div>
            <MDBBtn outline className='mx-2 px-5' color='black' size='lg' onClick={postData}>
               Update
            </MDBBtn>  
          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src={logo} alt="logo" fluid/>
          </MDBCol>
        </MDBRow> 
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
);
}
export default UpdateSeller;
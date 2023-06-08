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

const UpdateProduct=()=>{

    const navigate=useNavigate();
    
  const [Product, setProduct]=useState({
    name:"", description:"", price:"",stock:"",category:"",

  })
  const {id}=useParams("");
  let name, value;
  const setData=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setProduct
({...Product,[name]:value});
  }

  const postData= (e)=>{


    e.preventDefault();

    const obj={
      name:Product.name,
      description:Product.description,
      price:Product.price,
      stock:Product.stock,
      category:Product.category
    }
    axios.put(`http://localhost:3001/seller/updateProduct/${id}`,obj)
    .then(res=>{
      window.alert(" Product Information Updated Successfully")
      navigate('/SellerProducts')
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

            <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Admin</h2>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBInput label='Product Name' name='name' id='name' type='text'className='w-100' 
              value={Product.name}
              onChange={setData}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBInput label='Description' name='description' id='description' type='text'
              value={Product.description}
              onChange={setData}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBInput label='Price' name='price' id='price' type='price'
              value={Product.price}
              onChange={setData}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBInput label='Stock' name='stock' id='stock' type='Number'
              value={Product.stock}
              onChange={setData}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBInput label='Category' name='category' id='category' type='text'
              value={Product.category}
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
export default UpdateProduct;
import React ,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCardImage
}
from 'mdb-react-ui-kit';


const  Login=()=> {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    email:"",password:"",
  });
  let name, value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }

  const postData= (e)=>{
    e.preventDefault();
    const obj={
      email:user.email,
      password:user.password,
      
    }
    console.log(obj)
    axios.post('http://localhost:3001/admin/login',obj)
    .then(res=>{
      window.alert(" Login Successfully")
      navigate('/AdminUser')
    }).catch(function (error) {
      if (error.response) {
        window.alert(error.response.data.error);
      }
    });
}


  return (
    <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</h2>
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' name='email' id='email' type='text'
          value={user.email}
          onChange={handleInputs}
          />
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' name='password' id='password' type='password'
          value={user.password}
          onChange={handleInputs}
          />
        </div>
        <MDBBtn outline className='mx-2 px-5' color='black' size='lg' onClick={postData}>
                 Login
        </MDBBtn>

        <div className='d-flex flex-row mt-3 mb-5'>
                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                   <MDBIcon fab icon='facebook-f' size="lg"/>
                 </MDBBtn>

                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                 <MDBIcon fab icon='twitter' size="lg"/>
                   
                 </MDBBtn>

                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                   <MDBIcon fab icon='google' size="lg"  />
                 </MDBBtn>
               </div>

              <div>
                <p className="mb-0">Don't have an account?  <Link to='/register'>Sign Up</Link></p>
              </div>
        
        </MDBCol>
        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
          <MDBCardImage img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>
      </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>


  );
}

export default Login;
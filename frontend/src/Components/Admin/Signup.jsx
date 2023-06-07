import React ,{useState}from 'react';
import axios from 'axios'; 
import {useNavigate,Link} from 'react-router-dom'
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

const SignUp=()=> {

  const navigate=useNavigate();


  const [user,setUser]=useState({
    name:"",email:"",phoneNumber:"",password:"",confirmPassword:"",
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
      name:user.name,
      email:user.email,
      phoneNumber:user.phoneNumber,
      password:user.password,
      confirmPassword:user.confirmPassword,
    }
    console.log(obj)
    axios.post('http://localhost:3001/admin/signUp',obj)
    .then(res=>{
      window.alert(" Registered Successfully")
      navigate('/login')
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

              <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</h2>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' name='name' id='name' type='text'className='w-100' 
                value={user.name}
                onChange={handleInputs}
                />
                
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' name='email' id='email' type='text'
                value={user.email}
                onChange={handleInputs}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone me-3" size='lg'/>
                <MDBInput label='Phone Number' name='phoneNumber' id='phoneNumber' type='phoneNumber'
                value={user.phoneNumber}
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

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' name='confirmPassword' id='confirmPasssword' type='password'
                value={user.confirmPassword}
                onChange={handleInputs}
                />
              </div>
              <MDBBtn outline className='mx-2 px-5' color='black' size='lg' onClick={postData}>
                 Register
              </MDBBtn>

              <div>
                <p className="mb-0">Already have an account? <Link to='/login'>Login</Link></p>
              </div>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}


export default SignUp;
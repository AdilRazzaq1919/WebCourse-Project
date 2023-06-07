import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logo from '../Images/3.jpg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const IndividualAdmin = () => {
  const navigate = useNavigate();
  const [getuserData, setUserData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/admin/getIndividualAdmin/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error retrieving admin data:', error);
      }
    };
  
    fetchData();
  }, [id]);
  

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/deleteAdmin/${id}`);
      navigate('/AdminUser');
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  return (
    <div className='container mt-3'>
      {getuserData ? (
        <>
          <h1 style={{ fontWeight: 400 }}>Welcome {getuserData.name}</h1>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className='add_btn'>
                <Link to='/AdminUser'>
                  <button className='btn btn-dark mx-2'>
                    <i className="fas fa-home"></i>
                  </button>
                </Link>
                <button className='btn btn-primary mx-2'>
                  <i className="fas fa-pen"></i>
                </button>

                <button className='btn btn-danger' onClick={() => deleteData(getuserData._id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
              <div className='row'>
                <div className='left_view col-lg-6 col-mg-6 col-12 mt-5'>
                  <h3><i className="fa-solid fa-user"></i>    Name: <span style={{ fontWeight: 400, fontSize: 24 }}>{getuserData.name}</span></h3>
                  <h3><i className="fa-solid fa-envelope"></i>    Email: <span style={{ fontWeight: 400, fontSize: 24 }}>{getuserData.email}</span></h3>
                  <h3><i className="fa-solid fa-phone"></i>    Contact:  <span style={{ fontWeight: 400, fontSize: 24 }}>{getuserData.phoneNumber}</span> </h3>
                </div>
                <div className='right_view col-lg-6 col-mg-6 col-12' >
                  <img src={logo} style={{ height: 350, width: 400 }} alt="logo" />
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndividualAdmin;

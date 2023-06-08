import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

const SellerProducts = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const displayData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/seller/getProducts');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching Products data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/seller/deleteProduct/${id}`);
      navigate('/SellerProducts');
    } catch (error) {
      console.error('Error deleting Products:', error);
    }
  };

  useEffect(() => {
    if(localStorage.getItem('token')===null){
      navigate('/Login')
    }
    displayData();
  }, []);

  const renderProducts = () => {
    return userData.map((element, id) => (
      <div className="box" key={id}>
        <div className="box-image">
          <img src={element.images} alt="logo1" />
        </div>
        <h3>{element.name}</h3>
        <p>Description: {element.description}</p>
        <p>Category: {element.category}</p>
        <p>Price: {element.price}</p>
        <Link to={`/IndividualProduct/${element._id}`}>
          <button className="btn btn-success">
            <i className="fas fa-eye"></i>
          </button>
        </Link>
        <Link to={`/UpdateProducts/${element._id}`}>
          <button className="btn btn-primary">
            <i className="fas fa-pen"></i>
          </button>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => deleteData(element._id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    ));
  };

  return (
    <section className="education" id="education">
      <div className="main-text">
        <h2>
          <span>Men</span> Products
        </h2>
      </div>
      <div className="education-content">{renderProducts()}</div>
    </section>
  );
};

export default SellerProducts;

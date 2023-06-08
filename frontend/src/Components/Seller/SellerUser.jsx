import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css';



const SellerUser = () => {
  const [getuserData, setUserData] = useState([]);

  const displayData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/seller/getSeller');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/seller/deleteSeller/${id}`);
      displayData();
    } catch (error) {
      console.error('Error deleting user data:', error);
    }
  };

  useEffect(() => {
    displayData();
  }, []);

  const mapping = () => {
    if (!getuserData || getuserData.length === 0) {
      return (
        <tr>
          <td colSpan="5">Loading...</td>
        </tr>
      );
    }

    return getuserData.map((element, id) => (
      <tr key={id}>
        <th scope="row">{id + 1}</th>
        <td>{element.firstName}</td>
        <td>{element.lastName}</td>
        <td>{element.email}</td>
        <td className="d-flex justify-content-between">
          <Link to={`/IndividualSeller/${element._id}`}>
              <button className="btn btn-success">
                <i className="fas fa-eye"></i>
              </button>
          </Link>
          <Link to={`/UpdateSeller/${element._id}`}>
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
        </td>
      </tr>
    ));
  };

  return (
    <section className='bodysection'>
      <div className="admin">
        <div className="container">
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">CRUD</th>
              </tr>
            </thead>
            <tbody>{mapping()}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SellerUser;

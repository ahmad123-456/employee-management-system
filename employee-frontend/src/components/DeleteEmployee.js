import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteEmployee = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/employees/${id}`);
        navigate('/'); // Redirect to employee list
      } catch (error) {
        console.error(error);
      }
    };

    deleteEmployee();
  }, [id, navigate]);

  return (
    <div className="container">
       <div className="form-container">
      <h2>Deleting Employee...</h2>
    </div>
  </div>
  );
};

export default DeleteEmployee;

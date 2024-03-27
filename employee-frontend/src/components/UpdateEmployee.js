import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({});
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
        setEmployee(response.data);
        setName(response.data.name);
        setPosition(response.data.position);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/employees/${id}`, { name, position, email });
      navigate('/'); // Redirect to employee list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div  className="container">
     <div className="form-container">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="action-button">Update</button>
        <button onClick={() => navigate('/')} className="action-button">Cancel</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateEmployee;

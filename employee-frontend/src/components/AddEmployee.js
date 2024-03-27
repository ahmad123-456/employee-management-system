import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';
import { Link } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', { name, position, email });
      setName('');
      setPosition('');
      setEmail('');

      // Navigate to employee list after adding
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
    <div className = "form-container">
      <h2>Add Employee</h2>
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
        <button type="submit" className="action-button">Add Employee</button>
        <button type="button" className="action-button" onClick={() => navigate('/')}>Cancel</button>

      </form>
    </div>
    </div>
  );
};

export default AddEmployee;

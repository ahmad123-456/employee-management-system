import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';
import { useNavigate } from 'react-router-dom'; 

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);
  return (
    <div className="container">
    <h1>Employee Management System</h1>
      <div className="employee-list">
        <h2>Employee List</h2>
        <table>
          {/* Table headers */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Employee rows */}
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.email}</td>
                <td>
                  <Link to={`/update/${employee._id}`} className="action-button">
                    Update
                  </Link>
                  <Link to={`/delete/${employee._id}`} className="action-button">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="action-button" onClick={() => navigate('/add')}>Add Employee</button>

    </div>
  );
};

export default EmployeeList;
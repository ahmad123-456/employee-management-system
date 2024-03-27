import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles.css';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';

import employeeImage from './employee.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={employeeImage} alt="Employee Management" className="header-image" />
        <Routes>
          <Route exact path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
          <Route path="/delete/:id" element={<DeleteEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
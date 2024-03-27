import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <App/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

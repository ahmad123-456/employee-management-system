const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors()); 

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27017/employee-database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Use employee routes
app.use('/api', employeeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

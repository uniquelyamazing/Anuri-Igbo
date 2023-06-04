const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sunisaac223@@$',
  database: 'language'
});

// Connect to the MySQL server
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
// Add your signup and login routes here
const authRoutes = require('./auth');
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

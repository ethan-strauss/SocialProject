const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'social', // Your database name
  port: 3306
});

// Add a route for the root (/) path
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// A simple route to test database connection
app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM Users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

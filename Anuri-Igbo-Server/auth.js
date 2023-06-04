const express = require('express');
const bcrypt = require('bcrypt');


function createAuthRoutes(connection) {
    const router = express.Router();
  
// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    connection.query(query, [email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ message: 'User created successfully' });
      }
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

      // Retrieve the user from the database
      const query = 'SELECT * FROM users WHERE email = ?';
      connection.query(query, [email], async (err, results) => {
        if (err) {
          console.error('Error retrieving user:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          if (results.length > 0) {
            const user = results[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
              res.json({ message: 'Login successful' });
            } else {
              res.status(401).json({ error: 'Invalid email or password' });
            }
          } else {
            res.status(401).json({ error: 'Invalid email or password' });
          }
        }
      });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
}

module.exports = createAuthRoutes;

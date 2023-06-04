const express = require('express');
const router = express.Router();
const mysql = require('mysql');

function createAuthRoutes(connection) {
    const router = express.Router();
  
// Route to fetch user profile
router.get('/', (req, res) => {
  const userId = req.userId; // Assuming you have a middleware that extracts the user ID from the authentication token

  connection.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];
    const { username, email } = user; // Include other relevant fields

    res.json({ username, email });
  });
});

// Route to update user profile
router.put('/', (req, res) => {
  const userId = req.userId; // Assuming you have a middleware that extracts the user ID from the authentication token
  const { username, password } = req.body;

  // Update user profile in the database
  connection.query(
    'UPDATE users SET username = ?, password = ? WHERE id = ?',
    [username, password, userId],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      res.json({ message: 'Profile updated successfully' });
    }
  );
});
}
module.exports = router;

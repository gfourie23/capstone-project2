/* const { OAuth2Client } = require('google-auth-library');
const pool = require('../config/db'); // Your database connection

const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID');

const verifyGoogleToken = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: 'YOUR_GOOGLE_CLIENT_ID',
  });
  const payload = ticket.getPayload();
  return payload;
};

const googleAuth = async (req, res) => {
  const { token } = req.body;

  try {
    const userInfo = await verifyGoogleToken(token);
    const { name, email } = userInfo;

    // Check if the user already exists in the database
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      res.json(existingUser.rows[0]);
    } else {
      // Insert user into the database
      const newUser = await pool.query('INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *', [name, email]);
      res.status(201).json(newUser.rows[0]);
    }
  } catch (error) {
    console.error('Error creating/authenticating user with Google:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  googleAuth,
};
*/

import { addUser } from '../services/userService.js';

export const handleGoogleSignIn = async (req, res) => {
  const { username, email, googleId } = req.body;

  try {
    const newUser = await addUser({ username, email, googleId });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

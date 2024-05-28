import pool from '../config/db.js';

export const addUser = async ({ username, email, googleId }) => {
  const result = await pool.query(
    'INSERT INTO users (username, email, google_id) VALUES ($1, $2, $3) RETURNING *',
    [username, email, googleId]
  );
  return result.rows[0];
};

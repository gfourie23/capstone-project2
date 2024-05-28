/* import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
*/


import pool from '../config/db.js';

export const addWord = async (userId, sectionHandle, englishWord, spanishWord) => {
  const result = await pool.query(
    'INSERT INTO vocabulary (user_id, section_handle, english_word, spanish_word) VALUES ($1, $2, $3, $4) RETURNING *',
    [userId, sectionHandle, englishWord, spanishWord]
  );
  return result.rows[0];
};

export const getWordsByCategory = async (userId, sectionHandle) => {
  const result = await pool.query(
    'SELECT english_word, spanish_word FROM vocabulary WHERE user_id = $1 AND section_handle = $2',
    [userId, sectionHandle]
  );
  return result.rows;
};

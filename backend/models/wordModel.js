import pool from '../config/db.js';

export const getVocabularyBySection = async (userId, sectionHandle) => {
  const result = await pool.query(
    'SELECT english_word, spanish_word FROM vocabulary WHERE user_id = $1 AND section_handle = $2',
    [userId, sectionHandle]
  );
  return result.rows;
};

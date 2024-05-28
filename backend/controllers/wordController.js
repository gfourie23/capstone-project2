import { getVocabularyBySection } from '../models/wordModel.js';

export const fetchSectionData = async (req, res) => {
  const { userId } = req.params; // Assuming userId is in params or could be from req.user if authenticated
  const { handle } = req.params;

  try {
    const vocabulary = await getVocabularyBySection(userId, handle);
    res.json({ vocabulary });
  } catch (error) {
    console.error('Error retrieving section data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

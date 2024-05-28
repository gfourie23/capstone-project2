const express = require('express');
const router = express.Router();
const db = require('./config/db'); // Import your database connection module

// GET request to fetch section data by handle
router.get('/sections/:handle', async (req, res) => {
    const { handle } = req.params;

    try {
        // Query the database to fetch section data based on the handle
        const sectionData = await db.query('SELECT * FROM sections WHERE handle = ?', [handle]);
        
        if (sectionData.length === 0) {
            return res.status(404).json({ error: 'Section not found' });
        }

        // Query the database to fetch vocabulary data for the section
        const vocabularyData = await db.query('SELECT * FROM vocabulary WHERE section_handle = ?', [handle]);

        // Combine section data with vocabulary data
        const sectionWithVocabulary = {
            ...sectionData[0],
            vocabulary: vocabularyData
        };

        res.json(sectionWithVocabulary);
    } catch (error) {
        console.error('Error fetching section data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add more routes as needed for other API endpoints related to sections

module.exports = router;

import express from 'express';
import { fetchSectionData } from '../controllers/wordController.js';

const router = express.Router();

router.get('/sections/:userId/:handle', fetchSectionData);

export default router;

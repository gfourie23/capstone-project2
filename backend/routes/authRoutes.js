/*const express = require('express');
const { googleAuth } = require('../controllers/ authController');
const router = express.Router();

router.post('/google-auth', googleAuth);

module.exports = router;
*/

import express from 'express';
import { handleGoogleSignIn } from '../controllers/authController.js';

const router = express.Router();

// Route for handling Google Sign-In
router.post('/google', handleGoogleSignIn);

export default router;


import express from 'express';
import verifyToken from '../middlewares/token.middleware.js';
import EmailController from '../controllers/email.controller.js';

const router = express.Router();

router.post('/sendEmail', verifyToken, EmailController.sendEmail)

export default router

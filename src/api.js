import express from 'express';

import EmailController from './controllers/email.controller.js';

const router = express.Router();

router.post('/sendEmail', EmailController.sendEmail)

export default router

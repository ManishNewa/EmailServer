import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import api from './src/api/index.js';

const app = express();

dotenv.config({ path: './.env' });

app.use(cors());
app.use(express.json());

app.use('/api', api);

export default app;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: './.env' });

app.use(cors());
app.use(express.json());

export default app;

import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Node.js API running on Vercel!');
});

app.listen(PORT, () => {
  console.log(
    `Server is running on ${(env === 'development' ? process.env.API_URL : '') + ':' + PORT}`
  );
});

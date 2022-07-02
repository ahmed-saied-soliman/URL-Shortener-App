import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/dbConnection.js';
import URLRoutes from './routes/urlRoutes.js';

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json({ extended: false }));

/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested, Content-Type, Accept Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
    return res.status(200).json({});
  }
  next();
});*/

app.use(cors());

/*app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_APP_URL],
  })
);*/

app.get('/', (req, res) => {
  res.send('Hello to Shortly API');
});

app.use('/', URLRoutes);

app.listen(
  process.env.PORT,
  console.log(`Server running on ${process.env.PORT}...`)
);

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import routes from './routes';
import errorHandler from './errors/handler';
import 'express-async-errors';

const app = express();

// Loading environment variables
dotenv.config();

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

// Running API
app.listen(3333, () => {
  console.log('Server running on port 3333');
});

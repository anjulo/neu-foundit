import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userController from './controllers/userController.js';

dotenv.config()
mongoose.connect(process.env.DB_CONNECTION_STRING)

const app = express()
app.use(cors())
app.use(express.json())
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

userController(app)

export default app;

import express from 'express';
import cors from 'cors';
import session from 'express-session';

const app = express()
app.use(cors())
app.use(express.json())
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.listen(process.env.PORT || 4000)

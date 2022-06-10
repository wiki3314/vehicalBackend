import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import Store from 'connect-mongo';

import connectToDB from './db/db';
import config from './config/env';
import routes from './app.routes';

const MongoStore = Store(session);

const app = express();

// Set "Access-Control-Allow-Origin" header
app.use(
  cors({
    origin: ['http://localhost:3000',
    'http://localhost:5000',],
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);

if (config.env === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * -------------- SESSION SETUP ----------------
 */

// Enable authentication using session + passport
app.use(
  session({
    secret: config.mongoUri,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    },
  }),
);

/**
 * -------------- ROUTES ----------------
 */

connectToDB((dbError, db) => {
  if (dbError) {
    throw dbError;
  }

  // mount all routes
  app.use('/', routes({ config, db }));
});

export default app;

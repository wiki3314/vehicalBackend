/* eslint-disable no-unused-vars */
import express from 'express';
import path from 'path';
// import compareVersions from 'compare-versions';

import apiRouter from './api';

export default (config, db) => {
  const api = express.Router();

  api.use('/api', apiRouter({ config, db }));

  /** GET /health-check - Check service health */
  api.get('/health-check', (req, res) => res.send('OK'));

  return api;
};

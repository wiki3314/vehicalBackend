// =================================================================
// get the packages we need ========================================
// =================================================================
import { Router } from 'express';
import mongoose from 'mongoose';

// =================================================================
// Other Routes ====================================================
// =================================================================
import authRoutes from './auth/auth.routes';
import categoriesRouters from './categories/categories.routes';
import carsRouters from './cars/cars.routes';

// eslint-disable-next-line no-unused-vars
export default (config, db) => {
  // ---------------------------------------------------------
  // get an instance of the router for api routes
  // ---------------------------------------------------------
  const router = Router();

  router.use('/auth', authRoutes({ config, db }));

  router.use('/categories', categoriesRouters({ config, db }));

  router.use('/cars', carsRouters({ config, db }));

  // basic api routes.
  router.get('/', (req, res) => {
    if (mongoose.connection.readyState === 1) {
      res.send('Api server is running and database connection is established.');
    } else {
      res.send('Api server is running.');
    }
  });

  return router;
};

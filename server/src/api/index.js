// =================================================================
// get the packages we need ========================================
// =================================================================
import { Router } from 'express';
import v1Routers from './v1';

export default (config, db) => {
  // ---------------------------------------------------------
  // get an instance of the router for api routes
  // ---------------------------------------------------------
  const router = Router();

  // ---------------------------------------------------------
  // v1 routes
  // ---------------------------------------------------------
  router.use('/v1', v1Routers({ config, db }));

  /** GET /api/v1/auth/ - Basic Not Found API routes. */
  router.get('/', (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  return router;
};

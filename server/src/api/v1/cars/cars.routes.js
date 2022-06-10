/* eslint-disable import/no-named-as-default-member */
// =================================================================
// get the packages we need ========================================
// =================================================================
import { Router } from 'express';
import CarsController from './cars.controller';

import { authenticate } from '../middleware';

// eslint-disable-next-line no-unused-vars
export default (config, db) => {
  // ---------------------------------------------------------
  // get an instance of the router for api routes
  // ---------------------------------------------------------
  const router = Router();

  router
    .route('/add')
    /** POST /api/v1/categories/add - add new category */
    .post(authenticate, CarsController.add);

  router
    .route('/:carId')
    /** GET /api/v1/categories/:cId - get category  */
    .get(authenticate, CarsController.getCar)
    /** PUT /api/v1/categories/:cId - edit category  */
    .put(authenticate, CarsController.edit)
    /** DELETE /api/v1/categories/:cId - delete category  */
    .delete(authenticate, CarsController.delete);

  router
    .route('/:categoryId/cars')
    /** GET /api/v1/categories/:cId - get category  */
    .get(authenticate, CarsController.getCategoryCars);

  /** GET /api/v1/categories/ - Categories Not Found API routes. */
  router.get('/', (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  return router;
};

/* eslint-disable import/no-named-as-default-member */
// =================================================================
// get the packages we need ========================================
// =================================================================
import { Router } from 'express';
import CategoriesController from './categories.controller';

import { authenticate } from '../middleware';

// eslint-disable-next-line no-unused-vars
export default (config, db) => {
  // ---------------------------------------------------------
  // get an instance of the router for api routes
  // ---------------------------------------------------------
  const router = Router();

  router
    .route('/')
    /** POST /api/v1/categories - all category */
    .get(authenticate, CategoriesController.getCategories);

  router
    .route('/add')
    /** POST /api/v1/categories/add - add new category */
    .post(authenticate, CategoriesController.add);

  router
    .route('/:cId')
    /** GET /api/v1/categories/:cId - get category  */
    .get(authenticate, CategoriesController.getCategory)
    /** PUT /api/v1/categories/:cId - edit category  */
    .put(authenticate, CategoriesController.edit)
    /** DELETE /api/v1/categories/:cId - delete category  */
    .delete(authenticate, CategoriesController.delete);

  /** GET /api/v1/categories/ - Categories Not Found API routes. */
  router.get('/', (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  return router;
};

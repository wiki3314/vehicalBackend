/* eslint-disable import/no-named-as-default-member */
// =================================================================
// get the packages we need ========================================
// =================================================================
import { Router } from 'express';
import AuthController from './auth.controller';

import { authenticate } from '../middleware';

// eslint-disable-next-line no-unused-vars
export default (config, db) => {
  // ---------------------------------------------------------
  // get an instance of the router for api routes
  // ---------------------------------------------------------
  const router = Router();

  router
    .route('/signIn')
    /** POST /api/v1/auth/signIn - Login user */
    .post(AuthController.signIn, AuthController.attachTokens, AuthController.loginRespond);

  router
    .route('/logout')
    /** GET /api/v1/auth/logout - Logout user */
    .post(authenticate, AuthController.logout);

  router
    .route('/signup')
    /** POST /api/v1/auth/signup - Signup new user */
    .post(AuthController.signup);

  /** GET /api/v1/auth/ - Auth Not Found API routes. */
  router.get('/', (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  return router;
};

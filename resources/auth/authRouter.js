const express = require('express');
const { GOOGLE_FRONTEND_REDIRCT } = require('../../config/index');
const {
  deleteUser,
  editUser,
  loginUser,
  registerUser,
  authGoogle,
  completeGoogleAuth,
} = require('./authControllers');

const validate = require('../../utils/validate');
const { registerSchema, loginSchema, editSchema } = require('./authSchema');

const { authorized, checkEmailExists } = require('./authMiddlewares');
const googlePassport = require('./utils/googlePassport');

const authRouter = express.Router();

authRouter.post('/', validate(registerSchema), registerUser);
authRouter.put('/', validate(editSchema), authorized, editUser);
authRouter.delete('/', authorized, deleteUser);
authRouter.post('/login', validate(loginSchema), checkEmailExists, loginUser);

authRouter.get(
  '/google',
  googlePassport.Passport.authenticate('google', {
    scope: ['openid email profile'],
  })
);

authRouter.get(
  '/google/callback',
  googlePassport.Passport.authenticate('google', {
    failureRedirect: `${GOOGLE_FRONTEND_REDIRCT}`,
  }),
  authGoogle
);

authRouter.post('/google/:token', completeGoogleAuth);

module.exports = authRouter;

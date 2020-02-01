const express = require('express');

const {
  deleteUser,
  editUser,
  loginUser,
  registerUser,
} = require('./authControllers');

const { authorized, checkEmailExists } = require('./authMiddlewares');

const authRouter = express.Router();

authRouter.post('/', registerUser);
authRouter.put('/', authorized, editUser);
authRouter.delete('/', authorized, deleteUser);
authRouter.post('/login', checkEmailExists, loginUser);

module.exports = authRouter;

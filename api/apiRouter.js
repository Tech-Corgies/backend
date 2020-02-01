const appRouter = require('express').Router();
const authRouter = require('../resources/auth/authRouter');
const predictRouter = require('../resources/predict/predictRouter');

appRouter.use('/auth', authRouter);
appRouter.use('/predict', predictRouter);

module.exports = appRouter;

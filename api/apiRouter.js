const appRouter = require('express').Router();
const authRouter = require('../resources/auth/authRouter');
const predictRouter = require('../resources/predict/predictRouter');
const categoriesRouter = require('../resources/categories/categoriesRouter');

const { authorized } = require('../resources/auth/authMiddlewares');

appRouter.use('/auth', authRouter);
appRouter.use('/predict', authorized, predictRouter);
appRouter.use('/categories', authorized, categoriesRouter);

module.exports = appRouter;

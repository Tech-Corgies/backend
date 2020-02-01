const appRouter = require('express').Router();
const authRouter = require('../resources/auth/authRouter');
const modelRouter = require('../resources/model/modelRouter');

appRouter.use('/auth', authRouter);
appRouter.use('/model', modelRouter);

module.exports = appRouter;

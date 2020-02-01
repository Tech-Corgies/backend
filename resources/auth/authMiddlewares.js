const jwt = require('jsonwebtoken');
const { JWTSECRET } = require('../../config');
const { filter } = require('./authModel');

exports.authorized = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWTSECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: err.message });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      error: 'Unauthenticated - please provide a valid token',
    });
  }
};

exports.checkEmailExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await filter({ email });
  if (!user) {
    res.status(404).json({ message: 'User with this email does not exists' });
  } else {
    req.user = user;
    next();
  }
};

const jwt = require('jsonwebtoken');
const { JWTSECRET } = require('../../../config/index');

const generateToken = (user, secret = JWTSECRET) => {
  const payload = {
    subject: user.id,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
};

module.exports = generateToken;

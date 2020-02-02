const joi = require('@hapi/joi');

const registerSchema = joi.object({
  email: joi
    .string()
    .label('Email')
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: joi
    .string()
    .label('Password')
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

const loginSchema = joi.object({
  email: joi
    .string()
    .label('Email')
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: joi
    .string()
    .label('Password')
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

const editSchema = joi.object({
  email: joi
    .string()
    .label('Email')
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  oldPassword: joi
    .string()
    .label('Password')
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
  newPassword: joi
    .string()
    .label('Password')
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

module.exports = { registerSchema, loginSchema, editSchema };

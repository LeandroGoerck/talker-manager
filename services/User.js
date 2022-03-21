const User = require('../models/User');

const HTTP_OK_STATUS = 200;

const EMAIL_DOES_NOT_EXISTS = {
      err: {
        message: 'O campo "email" é obrigatório',
      },
      status: 400,
    };

const WRONG_EMAIL_FORMAT = {
  err: {
    message: 'O "email" deve ter o formato "email@email.com"',
  },
  status: 400,
};

const PASSWORD_DOES_NOT_EXISTS = {
  err: {
    message: 'O campo "password" é obrigatório',
  },
  status: 400,
};

const WRONG_PASSWORD_LENGTH = {
  err: {
    message: 'O "password" deve ter pelo menos 6 caracteres',
  },
  status: 400,
};

const checkIfEmailExists = (email) => {
  if (!email) {
    throw EMAIL_DOES_NOT_EXISTS;
  }
};

// regex source - changed be
// https://www.w3resource.com/javascript/form/email-validation.php
const checkEmailFormat = (email) => {
  const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailFormat)) {
    throw WRONG_EMAIL_FORMAT;
  }
};

const checkIfPasswordExists = (password) => {
  if (!password) {
    throw PASSWORD_DOES_NOT_EXISTS;
  }
};

const checkPasswordLength = (password) => {
  const passwordLength = password.length;
  if (passwordLength < 6) {
    throw WRONG_PASSWORD_LENGTH;
  }
};

const login = async (email, password) => {
  checkIfEmailExists(email);
  checkEmailFormat(email);
  checkIfPasswordExists(password);
  checkPasswordLength(password);
  const { token } = await User.login();
  return {
    status: HTTP_OK_STATUS,
    token: {
      token,
    },
  };
};

module.exports = {
  login,
};

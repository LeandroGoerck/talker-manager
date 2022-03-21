/* eslint-disable no-throw-literal */
const User = require('../models/User');

const HTTP_OK_STATUS = 200;

const checkIfEmailExists = (email) => {
  if (!email) {
    throw {
      err: {
        message: 'O campo "email" é obrigatório',
      },
      status: 400,
    };
  }
};

// regex source
// https://www.w3resource.com/javascript/form/email-validation.php
const checkEmailFormat = (email) => {
  const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailFormat)) {
    throw {
      err: {
        message: 'O "email" deve ter o formato "email@email.com"',
      },
      status: 400,
    };
  }
};

const checkIfPasswordExists = (password) => {
  if (!password) {
    throw {
      err: {
        message: 'O campo "password" é obrigatório',
      },
      status: 400,
    };
  }
};

const checkPasswordLength = (password) => {
  const passwordLength = password.length;
  if (passwordLength < 6) {
    throw {
      err: {
        message: 'O "password" deve ter pelo menos 6 caracteres',
      },
      status: 400,
    };
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

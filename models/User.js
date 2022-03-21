const randtoken = require('rand-token');

const login = () => {
  const token = randtoken.generate(16);
  return {
      token,
    };
};

module.exports = {
  login,
};
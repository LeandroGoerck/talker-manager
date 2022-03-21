const rescue = require('express-rescue');
const User = require('../services/User');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const { status, token } = await User.login(email, password);
  console.log({ token });
  res.status(status).json(token);
});

module.exports = {
  login,
};

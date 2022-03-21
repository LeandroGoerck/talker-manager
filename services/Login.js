const randtoken = require('rand-token');

const HTTP_OK_STATUS = 200;

function checkEmail(email) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) return { message: 'O campo "email" é obrigatório' };
  if (!email.match(emailFormat)) {
    return ({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
}

// regex source
// https://www.w3resource.com/javascript/form/email-validation.php
function login(req, res) {
  const token = randtoken.generate(16);
  const { email, password } = req.body;
  console.log(email, password);
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailFormat)) return res.status(HTTP_OK_STATUS).json({ token });
  return res.status(400)
  .json({ message: 'O "email" deve ter o formato "email@email.com"' });
}

module.exports = {
  login,
};
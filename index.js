const express = require('express');
const bodyParser = require('body-parser');
const Talker = require('./controllers/Talker');
// const Login = require('./controllers/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', Talker.getAll);
app.get('/talker/:id', Talker.getById);

// app.post('/login', Login);

app.use((err, _req, res, _next) => {
  const { status, err: { message } } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log('Online');
});

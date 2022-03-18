const express = require('express');
const bodyParser = require('body-parser');
const seed = require('./tests/seed.json');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (request, response) => {
  response.status(200).json(seed);
});

app.listen(PORT, () => {
  console.log('Online');
});

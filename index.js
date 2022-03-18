const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const FILE_NAME = './talker.json';

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (request, response) => {
  fs.readFile(FILE_NAME, 'utf8')
  .then((JSONstring) => JSON.parse(JSONstring))
  .then((data) => response.status(200).json(data))
  .catch((err) => {
    console.error(`Error reading file ${FILE_NAME}\n Error: ${err}`);
    process.exit(1);
  });
});

app.listen(PORT, () => {
  console.log('Online');
});

const fs = require('fs').promises;

const FILE_NAME = './talker.json';

function getAll() {
  return fs.readFile(FILE_NAME, 'utf8')
  .then((JSONstring) => JSON.parse(JSONstring));
}

function getById(id) {
  return fs.readFile(FILE_NAME, 'utf8')
  .then((JSONstring) => JSON.parse(JSONstring))
  .then((data) => data.find((talker) => talker.id === parseInt(id, 10)));
}

function writeFile(newTalker) {
  console.log('newTalker', newTalker);
  fs.writeFile(FILE_NAME, JSON.stringify(newTalker))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
  return newTalker;
}

module.exports = {
  getAll,
  getById,
  writeFile,
};
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

module.exports = {
  getAll,
  getById,
};
const fs = require('fs').promises;

const FILE_NAME = './talker.json';
const HTTP_OK_STATUS = 200;

function getAllTalkers(_req, res) {
  fs.readFile(FILE_NAME, 'utf8')
  .then((JSONstring) => JSON.parse(JSONstring))
  .then((data) => res.status(HTTP_OK_STATUS).json(data))
  .catch((err) => console.error(`Error reading file ${FILE_NAME}\n Error: ${err}`));
}

function getTalkerById(req, res) {
  fs.readFile(FILE_NAME, 'utf8')
  .then((JSONstring) => JSON.parse(JSONstring))
  .then((data) => {
    const { id } = req.params;
    const found = data.find((talker) => talker.id === parseInt(id, 10));
    if (found) return res.status(HTTP_OK_STATUS).json(found);
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  })
    .catch((err) => console.error(`Error reading file ${FILE_NAME}\n Error: ${err}`));
}

module.exports = {
  getAllTalkers,
  getTalkerById,
};
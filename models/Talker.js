const fs = require('fs').promises;

const FILE_NAME = './talker.json';

function getAll(_req, _res) {
  return fs.readFile(FILE_NAME, 'utf8')
  .then((JSONstring) => JSON.parse(JSONstring));
}

// function getTalkerById(req, res) {
//   fs.readFile(FILE_NAME, 'utf8')
//   .then((JSONstring) => JSON.parse(JSONstring))
//   .then((data) => {
//     const { id } = req.params;
//     const found = data.find((talker) => talker.id === parseInt(id, 10));
//     if (found) return res.status(HTTP_OK_STATUS).json(found);
//     return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
//   })
//     .catch((err) => console.error(`Error reading file ${FILE_NAME}\n Error: ${err}`));
// }

module.exports = {
  getAll,
  // getTalkerById,
};
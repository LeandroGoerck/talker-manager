const rescue = require('express-rescue');
const Talker = require('../services/Talker');

const getAll = rescue(async (req, res) => {
  const { status, result } = await Talker.getAll();
  res.status(status).json(result);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const { status, talker } = await Talker.getById(id);
  res.status(status).json(talker);
});

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
  getById,
};
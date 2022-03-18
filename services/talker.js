const fs = require('fs').promises;

const FILE_NAME = './talker.json';

function getAllTalkers(_req, res) {
  fs.readFile(FILE_NAME, 'utf8')
  .then((JSONstring) => JSON.parse(JSONstring))
  .then((data) => res.status(200).json(data))
  .catch((err) => {
    console.error(`Error reading file ${FILE_NAME}\n Error: ${err}`);
    process.exit(1);
  });
}

module.exports = {
  getAllTalkers,
};
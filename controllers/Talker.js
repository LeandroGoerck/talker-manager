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

const add = rescue(async (req, res) => {
  const token = req.headers.authorization;
  const { name, age, talk } = req.body;
  const talker = {
    name,
    age,
    talk,
  };
  const { status, newTalker } = await Talker.add(talker, token); 
  res.status(status).json(newTalker);
});

module.exports = {
  getAll,
  getById,
  add,
};
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
  const { status, newTalker } = await Talker.add(name, age, talk, token); 
  res.status(status).json(newTalker);
});

const edit = rescue(async (req, res) => {
  const token = req.headers.authorization;
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const { status, editedTalker } = await Talker.edit({ name, age, talk, id }, token); 
  res.status(status).json(editedTalker);
});

const remove = rescue(async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { status } = await Talker.remove(id, token); 
  res.status(status).json();
});

module.exports = {
  getAll,
  getById,
  add,
  edit,
  remove,
};
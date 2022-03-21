const Talker = require('../models/Talker');

const HTTP_OK_STATUS = 200;

const TALKER_NOT_FOUNT = {
  err: {
    message: 'Pessoa palestrante não encontrada',
  },
  status: 404,
};

const getAll = async () => {
  const result = await Talker.getAll();
  return {
    status: HTTP_OK_STATUS,
    result,
  };
};

const checkTalker = (talker) => {
  if (!talker) {
    // eslint-disable-next-line no-throw-literal
    throw TALKER_NOT_FOUNT;
  }
};

const getById = async (id) => {
  const talker = await Talker.getById(id);
  checkTalker(talker);
  console.log(talker);
  return {
    status: HTTP_OK_STATUS,
    talker,
  };
};

module.exports = {
  getAll,
  getById,
};
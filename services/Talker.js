const Talker = require('../models/Talker');

const HTTP_OK_STATUS = 200;

const getAll = async () => {
  const result = await Talker.getAll();
  return {
    status: HTTP_OK_STATUS,
    result,
  };
};

module.exports = {
  getAll,
  // getTalkerById,
};
const ERR = require('./errorMessages');
const Talker = require('../models/Talker');

const HTTP_OK_STATUS = 200;

const getAll = async () => {
  const result = await Talker.getAll();
  return {
    status: HTTP_OK_STATUS,
    result,
  };
};

const checkTalker = (talker) => {
  if (!talker) {
    throw ERR.TALKER_NOT_FOUNT;
  }
};

const getById = async (id) => {
  const talker = await Talker.getById(id);
  checkTalker(talker);
  return {
    status: HTTP_OK_STATUS,
    talker,
  };
};

const checkIfTokenExists = (token) => {
  if (!token) {
    throw ERR.TOKEN_NOT_FOUND;
  }
};

const checkIfTokenIsValid = (token) => {
  if (token.length < 16) {
    throw ERR.TOKEN_IS_NOT_VALID;
  }
};
const checkToken = (token) => {
  checkIfTokenExists(token);
  checkIfTokenIsValid(token);
};

const checkIfNameExists = (name) => {
  if (!name) {
    throw ERR.NAME_FIELD_IS_MANDATORY;
  }
};

const checkIfNameHasMoreThan3Chararcers = (name) => {
  if (name.length < 3) {
    throw ERR.NAME_MUST_HAVE_3_CHARACTERS;
  }
};

const checkTalkerName = (name) => {
  checkIfNameExists(name);
  checkIfNameHasMoreThan3Chararcers(name);
};

const checkIfAgeExists = (age) => {
  if (!age) {
    throw ERR.AGE_FIELD_IS_MANDATORY;
  }
};

const checkIfAgeIs18 = (age) => {
  if (age < 18) {
    throw ERR.AGE_MUST_BE_18_OR_MORE;
  }
};

const checkTalkerAge = (age) => {
  checkIfAgeExists(age);
  checkIfAgeIs18(age);
};

const checkIfRateIsNumber = (rate) => {
  if (typeof rate !== 'number') {
    throw ERR.RATE_MUST_BE_FROM_1_TO_5;
  }
};

const checkIfRateIsBetween1And5 = (rate) => {
  if (!(rate >= 1 && rate <= 5)) {
    throw ERR.RATE_MUST_BE_FROM_1_TO_5;
  } 
};

// https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
const checkWatchedAtFormat = (watchedAt) => { // dd/mm/aaaa
   const format = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  if (!watchedAt.match(format)) {
    throw ERR.WATCHED_AT_FORMAT;
  }
}; 

const checkIfTalkOrFieldsAreEmpty = (talk) => {
  if (!talk || !talk.watchedAt || talk.rate === undefined) {
    throw ERR.TALK_IS_MANDATORY_AND_KEYS_MUST_NOT_BE_EMPTY;
  }
};

const checkTalkerInfo = (name, age, talk) => {
  checkIfTalkOrFieldsAreEmpty(talk);
  checkTalkerName(name);
  checkTalkerAge(age);
  checkIfRateIsNumber(talk.rate);
  checkIfRateIsBetween1And5(talk.rate);
  checkWatchedAtFormat(talk.watchedAt);
};

const getNextId = (talkerList) => {
  const idList = talkerList.map((talkr) => talkr.id).sort((a, b) => b - a);
  const greaterId = idList[0];
  const nextId = greaterId + 1;
  return nextId;
};

const createNewTalkerWithId = (name, age, talk, id) => {
  const newTalker = {
    name,
    age,
    id: Number(id),
    talk,
  };
  return newTalker;
};

const add = async (name, age, talk, token) => {
  checkToken(token);
  checkTalkerInfo(name, age, talk);
  const talkerList = await Talker.getAll();
  const nextId = getNextId(talkerList);
  const newTalker = createNewTalkerWithId(name, age, talk, nextId);
  talkerList.push(newTalker);
  await Talker.writeFile(talkerList);
  return {
    status: 201,
    newTalker,
  };
};

const edit = async (talker, token) => {
  checkToken(token);
  const { name, age, talk, id } = talker;
  checkTalkerInfo(name, age, talk);
  const talkerList = await Talker.getAll();
  const editedTalker = createNewTalkerWithId(name, age, talk, id);
  talkerList[(id - 1)] = editedTalker;
  await Talker.writeFile(talkerList);
  return {
    status: 200,
    editedTalker,
  };
};

module.exports = {
  getAll,
  getById,
  add,
  edit,
};
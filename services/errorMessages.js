const TALKER_NOT_FOUNT = {
  err: { message: 'Pessoa palestrante não encontrada' },
  status: 404,
};

const TOKEN_NOT_FOUND = {
  err: { message: 'Token não encontrado' },
  status: 401,
};

const TOKEN_IS_NOT_VALID = {
  err: { message: 'Token inválido' },
  status: 401,
};

const NAME_FIELD_IS_MANDATORY = {
  err: { message: 'O campo "name" é obrigatório' },
  status: 400,
};

const NAME_MUST_HAVE_3_CHARACTERS = {
  err: { message: 'O "name" deve ter pelo menos 3 caracteres' },
  status: 400,
};

const AGE_FIELD_IS_MANDATORY = {
  err: { message: 'O campo "age" é obrigatório' },
  status: 400,
};

const AGE_MUST_BE_18_OR_MORE = {
  err: { message: 'A pessoa palestrante deve ser maior de idade' },
  status: 400,
};

const WATCHED_AT_FORMAT = {
  err: { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
  status: 400,
};

const RATE_MUST_BE_FROM_1_TO_5 = {
  err: { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
  status: 400,
};

const TALK_IS_MANDATORY_AND_KEYS_MUST_NOT_BE_EMPTY = {
  err: { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
  status: 400,
};

module.exports = {
  TALKER_NOT_FOUNT,
  TOKEN_NOT_FOUND,
  TOKEN_IS_NOT_VALID,
  NAME_FIELD_IS_MANDATORY,
  NAME_MUST_HAVE_3_CHARACTERS,
  AGE_FIELD_IS_MANDATORY,
  AGE_MUST_BE_18_OR_MORE,
  WATCHED_AT_FORMAT,
  RATE_MUST_BE_FROM_1_TO_5,
  TALK_IS_MANDATORY_AND_KEYS_MUST_NOT_BE_EMPTY,
};
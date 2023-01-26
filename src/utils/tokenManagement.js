const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
};

function encode(data) {
  const token = jwt.sign(data, JWT_SECRET, jwtConfig);
  return token;
}

function decode(token) {
  const data = jwt.verify(token, JWT_SECRET);
  return data;
}

module.exports = {
  encode,
  decode,
};

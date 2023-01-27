const { loginServ } = require('../services');

async function requestToken(req, res) {
  const { body: loginData } = req;
  const { errorCode, message } = await loginServ.generateToken(loginData);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(200).json({ token: message });
}

module.exports = {
  requestToken,
};

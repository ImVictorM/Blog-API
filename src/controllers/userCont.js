const { userServ } = require('../services');

async function requestCreation(req, res) {
  const { body: newUser } = req;
  const { errorCode, message } = await userServ.createInteraction(newUser);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(201).json({ token: message });
}

module.exports = {
  requestCreation,
};
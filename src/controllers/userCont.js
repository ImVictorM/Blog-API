const { userServ } = require('../services');

async function requestCreation(req, res) {
  const { body: newUser } = req;
  const { errorCode, message } = await userServ.createInteraction(newUser);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(201).json({ token: message });
}

async function requestAll(_req, res) {
  const { message } = await userServ.getAll();
  return res.status(200).json(message);
}

async function requestById(req, res) {
  const { params: { id } } = req;
  const { errorCode, message } = await userServ.getById(id);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(200).json(message);
}

module.exports = {
  requestCreation,
  requestAll,
  requestById,
};
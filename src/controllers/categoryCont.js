const { categoryServ } = require('../services');

async function requestCreation(req, res) {
  const { body: newCategory } = req;
  const { errorCode, message } = await categoryServ.createInteraction(newCategory);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(201).json(message);
}

async function requestAll(_req, res) {
  const { message } = await categoryServ.getAll();
  return res.status(200).json(message); 
}

module.exports = {
  requestCreation,
  requestAll,
};

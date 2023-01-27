const { categoryServ } = require('../services');

async function requestCreation(req, res) {
  const { body: newCategory } = req;
  const { errorCode, message } = await categoryServ.createInteraction(newCategory);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(201).json(message);
}

module.exports = {
  requestCreation,
};

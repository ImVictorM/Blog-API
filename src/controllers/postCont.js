const { postServ } = require('../services');

async function requestCreation(req, res) {
  const { body: newPost, user } = req;
  const { message, errorCode } = await postServ.createInteraction(newPost, user.id);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(201).json(message);
}

module.exports = {
  requestCreation,
};

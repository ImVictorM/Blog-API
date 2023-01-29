const { postServ } = require('../services');

async function requestCreation(req, res) {
  const { body: newPost, user } = req;
  const { message, errorCode } = await postServ.createInteraction(newPost, user.id);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(201).json(message);
}

async function requestAll(_req, res) {
  const { message } = await postServ.getAll();
  return res.status(200).json(message);
}

async function requestById(req, res) {
  const { id } = req.params;
  const { message, errorCode } = await postServ.getById(id);
  if (errorCode) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
}

async function requestUpdate(req, res) {
  const { 
    body: updatedPost, 
    params: { id: postId }, 
    user: { id: userId }, 
  } = req;
  const { message, errorCode } = await postServ.updateInteraction(postId, userId, updatedPost);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(200).json(message);
}

async function requestDelete(req, res) {
  const {
    params: { id: postId },
    user: { id: userId },
  } = req;

  const { errorCode, message } = await postServ.deleteInteraction(postId, userId);
  if (errorCode) {
    return res.status(errorCode).json({ message });
  }
  return res.status(204).end();
}

async function requestAllByTerm(req, res) {
  const { query: { q: term } } = req;
  const { message } = await postServ.getAllByTerm(term);
  return res.status(200).json(message);
}

module.exports = {
  requestUpdate,
  requestCreation,
  requestAll,
  requestById,
  requestDelete,
  requestAllByTerm,
};

const { tokenManagement } = require('../utils');

function requestToken(req, res) {
  const { body: loginData } = req;
  const token = tokenManagement.encode(loginData);
  return res.status(200).json({ token });
}

module.exports = {
  requestToken,
};

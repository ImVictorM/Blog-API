const { tokenManagement } = require('../utils');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    tokenManagement.decode(token);
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

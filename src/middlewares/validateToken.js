const { tokenManagement } = require('../utils');
const { userServ } = require('../services');

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { email } = tokenManagement.decode(token);
    const { message, errorCode } = await userServ.getByEmail(email);
    if (errorCode) {
      return res.status(errorCode).json({ message });
    }
    req.user = message;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

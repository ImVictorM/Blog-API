module.exports = (error, _req, res, _next) => {
  console.error(error);
  return res.status(500).send(error.message);
};

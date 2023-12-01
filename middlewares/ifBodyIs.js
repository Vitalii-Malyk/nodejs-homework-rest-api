const { HttpError } = require("../helpers");

const ifBodyIs = (req, res, next) => {
  const body = req.body;
  if (!body) {
    next(HttpError(400, "missing field favorite"));
  }
  next();
};

module.exports = ifBodyIs;

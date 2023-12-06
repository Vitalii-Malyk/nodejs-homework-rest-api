const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.log(req.body);
      next(HttpError(400, "missed required email or password field"));
    }
    next();
  };
  return func;
};

module.exports = validateBody;

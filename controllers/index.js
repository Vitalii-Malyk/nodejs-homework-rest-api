const {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
} = require("./contacts");

const { register, login } = require("./auth");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
  register,
  login,
};

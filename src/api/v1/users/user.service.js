const useDao = require("./user.dao");
const getAll = () => {
  return useDao.findAll();
};

const getOne = (id) => {
  return useDao.findOne(id);
};
const create = ({ username, password }) => {
  return useDao.create({ username, password });
};

const deleteUser = (id) => {
  return useDao.deleteUser(id);
};

const update = (id, { username, password }) => {
  return useDao.update(id, { username, password });
};

module.exports = {
  getAll,
  getOne,
  deleteUser,
  update,
  create,
};

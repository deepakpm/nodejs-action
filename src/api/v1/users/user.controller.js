const ServerResponse = require("../../../library/response");

const userService = require("./user.service");

const getAll = (req, res) => {
  const data = userService.getAll();
  const response = new ServerResponse(data);
  return response.sendResponse(res);
};

const getOne = (req, res) => {
  const { id } = req.params;
  const data = userService.getOne(id);
  const response = new ServerResponse(data);
  return response.sendResponse(res);
};
const create = (req, res) => {
  const { username, password } = res.body;
  const data = userService.create({ username, password });
  const response = new ServerResponse(data);
  return response.sendResponse(res);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const data = userService.deleteUser(id);
  const response = new ServerResponse(data);
  return response.sendResponse(res);
};

const update = (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const data = userService.update(id, { username, password });
  const response = new ServerResponse(data);
  return response.sendResponse(res);
};

module.exports = {
  getAll,
  getOne,
  deleteUser,
  update,
  create,
};

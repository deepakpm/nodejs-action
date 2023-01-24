const { NotFound } = require("../../../library/exceptions");

let db = [];

const insert = ({ userName, password }) => {
  const id = db.length + 1;
  const row = { id, userName, password };
  db = [...db, row];
  return id;
};

const findAll = () => {
  return db;
};

const findOne = (id) => {
  const data = db.find((item) => item.id === id);
  if (!data) {
    throw new NotFound(`given id : ${id} is not found`);
  }
  return data;
};

const update = (id, updateObj) => {
  const { userName, password } = updateObj;
  const rowToBeUpdated = db.findIndex((row) => row.id === id);
  if (rowToBeUpdated === -1) {
    throw new NotFound(`given id :${id} is not found`);
  }
  if (userName) {
    db[rowToBeUpdated].userName = userName;
  }
  if (password) {
    db[rowToBeUpdated].password = password;
  }
  return db[rowToBeUpdated];
};

const deleteFromDb = (id) => {
  db = db.filter((value) => value.id !== id);
  return db;
};

module.exports = {
  insert,
  update,
  findAll,
  findOne,
  deleteFromDb,
};

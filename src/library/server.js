const express = require("express");
const apiRouter = require("../api");
const ServerResponse = require("./response");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(apiRouter);

app.use((error, req, res, next) => {
  if (error) {
    return new ServerResponse(error.message, 500).sendResponse(res);
  }
  next();
});

const serverUp = () => {
  console.debug("SERVER INFO", `localhost:${PORT} is up`);
};

const connections = (socket) => {
  console.table({
    local: socket.localAddress,
  });
};

const expressApp = app.listen(PORT, serverUp);

expressApp.on("connection", connections);

module.exports = app;

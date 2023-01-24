class ServerResponse {
  constructor(response, statusCode = 200) {
    this.data = response;
    this.statusCode = statusCode;
  }

  toJSON() {
    return {
      status: this.statusCode === 200,
      data: this.statusCode === 200 ? this.data : [],
      message: this.statusCode !== 200 ? this.data : "",
    };
  }
  sendResponse(res) {
    return res.status(this.statusCode).send(this.toJSON());
  }
}

module.exports = ServerResponse;

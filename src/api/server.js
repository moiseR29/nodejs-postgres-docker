const express = require('express');

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._app = express();
    this._app.use(router);
  }

  getApp() {
    return this._app;
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._app.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log(`Application running on port ${port}`);
        resolve();
      });
    });
  }
}

module.exports = Server;

/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */

class ClientError extends Error {
    constructor(message, statusCode = 400) {
      super(message);
      this.statusCode = statusCode;
      this.name = 'ClientError';
    }
  }

  module.exports = ClientError;

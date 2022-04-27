/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */

const ClientError = require('./ClientError');
 
class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;

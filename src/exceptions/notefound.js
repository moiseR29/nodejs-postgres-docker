const DomainError = require('./domain');

class NotFoundError extends DomainError {
  constructor(message) {
    super(message);
    this.error = { message };
  }
}

module.exports = NotFoundError;

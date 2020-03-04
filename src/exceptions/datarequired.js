const DomainError = require('./domain');

class DataRequired extends DomainError {
  constructor(message) {
    super(message);
    this.error = { message };
  }
}

module.exports = DataRequired;

class UserLogin {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  validateLogin() {
    let equals = false;
    if (this._username === 'challenge' && this._password === 'password')
      equals = true;
    return equals;
  }
}

module.exports = UserLogin;

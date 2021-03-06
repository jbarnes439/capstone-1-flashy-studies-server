const xss = require('xss');
const bcrypt = require('bcryptjs');

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const UsersService = {

  // Check if username in the database
  hasUserWithUserName(db, username) {
    return db('users')
      .where({ username })
      .first()
      .then(user => !!user);
  },

  // create a new user
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('users')
      .returning('*')
      .then(([user]) => user);
  },

  // validate new user password
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password must be longer than 8 characters';
    }
    if (password.length > 72) {
      return 'Password must be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain 1 uppercase, lowercase, number, and special character';
    }
    return null;
  },

  // password encryption for new user
  hashPassword(password) {
    return bcrypt.hash(password, 12);
  },
   
  serializeUser(user) {
    return {
      id: user.id,
      username: xss(user.username),
      date_created: new Date(user.date_created),
    };
  },

};

module.exports = UsersService;
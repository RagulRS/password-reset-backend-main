const crypto = require('crypto');

const generateRandomString = () => {
  return crypto.randomBytes(32).toString('hex');
};

module.exports = generateRandomString;

const basicAuth = require('express-basic-auth');

const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;

if (!adminUsername || !adminPassword) {
  throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD must be set in the environment variables');
}

const users = {
  [adminUsername]: adminPassword,
};

const authorizer = (username, password) => {
  const user = users[username];
  if (user && user === password) {
    return true;
  }
  return false;
};

const unauthorizedResponse = (req) => {
  return req.auth
    ? `Credentials ${req.auth.user}:${req.auth.password} rejected`
    : 'No credentials provided';
};

module.exports = basicAuth({
  authorizer,
  unauthorizedResponse,
});

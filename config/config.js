var database = require('./environment/' + process.env.NODE_ENV + '/database.js');
var servers  = require('./environment/' + process.env.NODE_ENV + '/servers.js');
var session  = require('./session.js');

module.exports = {
  database: database,
  servers: servers,
  session: session
}

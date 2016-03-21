'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var servers = config.servers;
var db = config.database;

var https = require('https');
var fs = require('fs');
var db = require('./config/mongoose')();
var app = require('./config/express')();


console.log(process.env.NODE_ENV  + " config loaded.");
console.log(".......Server Config............................................");
console.log(servers);
console.log(".......DB Config................................................");
console.log(db);
console.log("................................................................");


app.listen(servers.webserver.port);
console.log('Server running at port ' + servers.webserver.port);

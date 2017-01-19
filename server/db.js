var mongoose = require("mongoose");

var USER = process.env.DB_USER;
var PASS = process.env.DB_PASS;

mongoose.connect(`mongodb://${USER}:${PASS}@ds117849.mlab.com:17849/heroku_49vpf6ff`);

module.exports = mongoose.connection;

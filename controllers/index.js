var db = require('../config/databases');
var response = require('./response');
// var Users = [];

exports.index = function(req, res, next) {
    response.ok("This is API example!s", res)
};
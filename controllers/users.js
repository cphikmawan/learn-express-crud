var response = require('./response');
var db = require('../config/databases');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.index = function(req, res) {
    response.ok("This is API for Users", res)
};

exports.getAllUser = function(req, res) {
    db.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.postUser = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if(!username || !password){
        res.status("400");
        res.send("Invalid details!");
     } else {
        var hash = bcrypt.hashSync(password, saltRounds);
        db.query('INSERT INTO users (username, password) VALUES (?,?)', [username, hash], function(error, result, fields) {
            if(error) {
                console.log(error)
                response.error('Duplicate!', res)
            } else {
                response.ok('Add User Success!', res)
            }
        });
     }
};

exports.findUser = function(req, res) {
    var user_id = req.params.user_id;
    db.query('SELECT * FROM users WHERE user_id = ?', [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateUser = function(req, res) {
    var user_id = req.params.user_id;
    var username = req.body.username;
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, saltRounds);
    db.query('UPDATE users SET username = ?, password = ? WHERE user_id = ?', [ username, hash, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Edit User Success!", res)
        }
    });
};

exports.deleteUser = function(req, res) {
    var user_id = req.params.user_id;
    db.query('DELETE FROM users WHERE user_id = ?', [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete User Success!", res)
        }
    });
};
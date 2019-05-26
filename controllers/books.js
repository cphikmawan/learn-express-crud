var response = require('./response');
var db = require('../config/databases');

exports.index = function(req, res) {
    response.ok("This is API for Books", res)
};

exports.getAllGate = function(req, res) {
    db.query('SELECT * FROM books', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.postGate = function(req, res) {
    var book_name = req.body.book_name;
    db.query('INSERT INTO books (book_name) VALUES (?)', [ book_name ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Create Book Success!", res)
        }
    });
};

exports.findGate = function(req, res) {
    var book_id = req.params.book_id;
    db.query('SELECT * FROM books WHERE book_id = ?', [ book_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateGate = function(req, res) {
    var book_id = req.params.book_id;
    var book_name = req.body.book_name;

    db.query('UPDATE books SET book_name = ? WHERE book_id = ?', [ book_name, book_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Edit Book Success!", res)
        }
    });
};

exports.deleteGate = function(req, res) {
    var book_id = req.params.book_id;
    db.query('DELETE FROM books WHERE book_id = ?', [ book_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete Book Success!", res)
        }
    });
};
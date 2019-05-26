var express = require('express');
var router = express.Router();
var books = require('../controllers/books');

router.get('/index', books.index);

router.route('/')
  .get(books.getAllGate)
  .post(books.postGate);

router.route('/:book_id')
  .get(books.findGate)
  .put(books.updateGate)
  .delete(books.deleteGate);

module.exports = router;
const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.index);

router.get('/new', booksCtrl.new);

module.exports = router;
const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.index);

router.get('/new', booksCtrl.new);

router.post('/', booksCtrl.create);

module.exports = router;
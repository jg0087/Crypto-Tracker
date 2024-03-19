var express = require('express');
var router = express.Router();
var coinsCtrl = require('../controllers/coins');
const coins = require('../controllers/coins');

router.get('/', coinsCtrl.index)

router.get('/new', coinsCtrl.new)

router.get('/:id', coinsCtrl.show)

router.post('/', coinsCtrl.create)

module.exports = router;

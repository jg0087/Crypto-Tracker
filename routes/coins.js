var express = require('express');
var router = express.Router();
var coinsCtrl = require('../controllers/coins')


router.get('/', coinsCtrl.index)

router.get('/new', coinsCtrl.new)

router.get('/:id', coinsCtrl.show)

router.post('/', coinsCtrl.create)

router.delete('/:id', coinsCtrl.delete)

router.get('/:id/edit', coinsCtrl.edit)

router.post('/:id', coinsCtrl.update)



module.exports = router;

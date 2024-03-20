const express = require('express')
const router = express.Router()
const infosCtrl = require('../controllers/infos')

router.post('/coins/:id/infos', infosCtrl.create)






module.exports= router
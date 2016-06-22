var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getThings())
})

module.exports = router

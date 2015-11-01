var express = require('express');
var hello = require('./hello')

var router = express.Router();

router.use('/api/hello', hello);

module.exports = router;

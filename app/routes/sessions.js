var express = require('express');
var router = express.Router();

router.put('/', 
        (req, res, next)=>res.send({user: 'ok'}));

module.exports = router;

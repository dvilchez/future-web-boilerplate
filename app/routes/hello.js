var express = require('express');
var router = express.Router();

router.get('/show', 
        (req, res, next)=>req.seneca.act({role:"hello",cmd:'show'}, (err, result)=>res.send(result)))

module.exports = router;

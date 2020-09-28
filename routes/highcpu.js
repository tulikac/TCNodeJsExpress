'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function highcpufunc (req, res) {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
        
        for (let j = 0; j < 100; j++) {
            console.log('spend some time');
            for (let k = 0; k < 10; k++) {
                result = i + j + k + result;
                
            }
        }
    }
    res.send('Hopefully taking some CPU cycles '+result);
});

module.exports = router;

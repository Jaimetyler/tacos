var express = require('express');
var router = express.Router();
var taco = require('../models/tacos');

router.get("/", function(req, res) {
    taco.selectAll((taco_data) => {
        
        console.log("hi from routes");
        console.log(taco_data);
        res.render('index');
    })
})

module.exports = router;
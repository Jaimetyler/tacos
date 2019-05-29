var express = require('express');
var router = express.Router();
var taco = require('../models/tacos');

router.get("/", function(req, res) {
    taco.selectAll((taco_data) => {
        
        console.log("hi from routes");
        console.log(taco_data);
        res.render('index', {taco_data});
    })
})

router.put("/tacos/update/:id", function(req, res){
    console.log(req.params.id)
    taco.updateOne(req.params.id, req.body, function(result){
      console.log(result)
      res.sendStatus(200);
    });
  }); 

  router.post("/taco/create", function(req,res) {
    console.log(req.body)
   taco.insertOne(req.body.taco_name, function(results){
     res.redirect("/");
   })
  })
  

module.exports = router;
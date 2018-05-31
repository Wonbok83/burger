var burger = require("../models/burger.js");


var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    
    burger.selectAll( function(data){
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
    // res.send("hi"); 
});


router.post("/burgers/create", function (req, res){
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect("/");
    });
});

router.put("/burgers/update", function (req, res){
 
    burger.updateOne(req.body.burger_id, function(result){
    
            console.log(result);
            res.redirect("/");
          
    });
    
});


module.exports = router;
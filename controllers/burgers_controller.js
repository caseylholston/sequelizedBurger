var express = require("express");
var router = express.Router();
var db = require('../models');


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(dbBurger) {
    var hbsObject = {
      burger: dbBurger
    };
    //console.log("From the router");
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function(dbBurger){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: true
          }, 
            {where: {
              id: req.params.id}}).then(function(dbBurger){
            res.redirect('/');
        });
    });

// Export routes for server.js to use.
module.exports = router;
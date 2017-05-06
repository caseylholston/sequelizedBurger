var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    //console.log("From the router"+hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    console.log(req.body);
  burger.insert([
    "burger_name"], [
    req.body.burger_name], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
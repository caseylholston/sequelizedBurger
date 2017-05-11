var express = require("express");
var router = express.Router();
var db = require('../models');


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger_sqlzd.findAll({include: [db.Creator]}).then(function(dbBurger) {
    var hbsObject = {
      burger: data
    };
    //console.log("From the router");
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
    devoured: req.body.devour
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
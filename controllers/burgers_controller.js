var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log("SELECT ALL");
    burger.selectAll(function(data) {
        console.log("SELECT RETURNS");
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("Add a burger", req.body)
    burger.insertOne(req.body.name, function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(req.params.id, function(result) {
        res.status(200).end();
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.deleteOne(req.params.id, function(result) {
        res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;
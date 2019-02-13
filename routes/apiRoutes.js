var db = require("../models");

module.exports = function(app) {

    // // // Create a new employee
    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(results) {
            res.json(results);
        });
    });

    // // Delete an example by id
    // app.delete("/api/applicant/:id", function(req, res) {
    //     db.Application.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbPost) {
    //         res.json(dbPost);
    //     });
    // });

    // // Add new employee
    // app.post("/api/employees/new", function (req, res) {
    //     console.log("BACK END EMPLOYEES API NEW", req.body);
    //     db.Employees.create({
    //         name: req.body.name,
    //         address: req.body.address,
    //         ssn: req.body.ssn,
    //         phone:req.body.phone,
    //     }).then(function (results) {
    //         res.json(results);
    //     });
    // });

    // // Delete an employee
    // app.delete("/api/employees/:id", function (req, res) {
    //     db.Employees.destroy({
    //         where:
    //         {
    //             id: req.params.id
    //         }
    //     }).then(function (dbPost) {
    //         res.json(dbPost);
    //     });
    // });

    // // Add an alert
    // app.post("/api/alerts/new", function(req, res) {
    //     console.log("BACK END ALERT API NEW", req.body);
    //     db.Alerts.create({
    //         event: req.body.event,
    //         date: req.body.date,
    //         recurring: req.body.recurring
    //     }).then(function(results) {
    //         res.json(results);
    //     });
    // });
    // // delete an alert
    // app.delete("/api/alerts/:id", function(req, res) {
    //     db.Alerts.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbPost) {
    //         res.json(dbPost);
    //     });
    // });

    // // Delete a revew by id
    // app.delete("/api/review/:id", function(req, res) {
    //     db.Comments.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbPost) {
    //         res.json(dbPost);
    //     });
    // });
    // // delete review
    // app.post("/api/review/new", function(req, res) {
    //     db.Comments.create({
    //         name: req.body.name,
    //         review: req.body.review
    //     }).then(function(results) {
    //         res.json(results);
    //     });
    // });
};
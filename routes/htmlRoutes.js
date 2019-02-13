var db = require("../models");
var Alert = require("../controller/alerts");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(burgers) {
            res.render("index", {
                burgers: burgers
            });
        });
    });

    // app.get("/management", function(req, res) {

    //     res.render("management");
    // });

    // // app.get("/management/potentialemployee", function (req, res) {
    // //     db.Application.findAll({}).then(function (ret) {
    // //         var hbsObject = {
    // //             application: ret
    // //         };
    // //         res.render("potentialemployee", hbsObject);
    // //     });
    // //     // db.Example.findAll({}).then(function(dbExamples) {

    // //     // });
    // // });

    // app.get("/documents", function(req, res) {
    //     db.Application.findAll({}).then(function(ret) {
    //         var hbsObject = {
    //             application: ret
    //         };
    //         res.render("documents", hbsObject);
    //     });

    // });

    // app.get("/alerts", function(req, res) {
    //     db.Alerts.findAll({}).then(function(ret) {
    //         var statusRet = Alert.updateAlertStatus(ret);
    //         var hbsObject = {
    //             alert: statusRet
    //         };
    //         res.render("alerts", hbsObject);
    //     });
    // });

    // app.get("/employees", function(req, res) {
    //     db.Employees.findAll({}).then(function(ret) {
    //         console.log("employees return", ret.keys());
    //         var hbsObject = {
    //             employees: ret
    //         };
    //         res.render("employees", hbsObject);
    //     })

    // });

    // app.get("/logIn", function(req, res) {
    //     res.render("logIn");
    // });

    // // Render 404 page for any unmatched routes
    // app.get("*", function(req, res) {
    //     res.render("404");
    // });
};
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        console.log("burger select all");
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burger_name, cb) {
        console.log("burger insert one ", burger_name)
        orm.insertOne("burgers", ["burger_name", "devoured"], [burger_name, 0], function(res) {
            cb(res);
        });
    },
    updateOne: function(burger_id, cb) {
        var condition = "id = " + burger_id;
        orm.update("burgers", {
                devoured: 1
            },
            condition,
            function(res) {
                cb(res);
            });
    },
    deleteOne: function(burger_id, cb) {
        var condition = "id = " + burger_id;
        orm.delete("burgers",
            condition,
            function(res) {
                cb(res);
            });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
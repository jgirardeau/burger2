var mysql = require("mysql");

// we placed the connections in this source object
var source = {
    // localhost
    localhost: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    }
};

var connection;
if (process.env.JAWSDB_URL) {
    console.log(process.env.JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(source.localhost);
}

// we use source.[name of connection] to hook into mysql
//var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
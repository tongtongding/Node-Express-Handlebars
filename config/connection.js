const mysql = require("mysql");
const util = require("util");

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "mushroom",
        database: "burgers_db"
    });
};

connection.connect(function (error) {
    if (error) {
        throw error;
    }

    console.log(`Connected to database as id ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;

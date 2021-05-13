const mysql = require("mysql2");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "control_clientes",
    connectionLimit: 5
});
module.exports = con;
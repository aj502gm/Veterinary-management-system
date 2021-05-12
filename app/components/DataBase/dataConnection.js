const mysql = require("mysql2");
import {mysql2} from "/node_modules/mysql2/typings/index.d.ts";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "control_clientes",
    connectionLimit: 5
});
export {con};
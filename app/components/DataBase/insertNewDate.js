//const con = require("./dataConnection.js");
import {con}  from './dataConnection.js';

console.log("New Module");
function prueba(){
    con.connect(function(err,res){
        if(err) throw err;
        con.query("SELECT * FROM cliente", function(err, results, fields){
            console.log(results[0].id_cliente);
        });
    });   
}
/*

AGREGAR LIBRERÍA REQUIRE    
https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
*/

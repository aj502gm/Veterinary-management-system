const exp = require('express');
const path = require('path');
var bodyParser  = require('body-parser');
const app = exp();

/*DATABASE AND QUERIES*/ 
const mysql = require("mysql2"); 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "control_clientes",
    connectionLimit: 5
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/postDate', (req, res)=>{
    console.log(req.body.ownerName);
    res.json(req.body);
});

app.use("/components", exp.static(path.resolve(__dirname, "app", "components")));

app.get("/*",(request, resolve) =>{ //MAIN DASHBOARD
    resolve.sendFile(path.resolve(__dirname, "app", "index.html"));
});

app.listen(process.env.PORT || 5600, function(){
    console.log("Server is now working");
});


const exp = require('express');
const path = require('path');
var bodyParser  = require('body-parser');
const app = exp();

/*DATABASE AND QUERIES*/ 

/*ERROR LOG

Error: connect ECONNREFUSED 127.0.0.1:3306
    Windows + R (admin role) + start MYSQL

*/
const mysql = require("mysql2"); 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "petworld",
    connectionLimit: 5
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/renderMainDashboard', (req,res)=>{ //DASHBOARD DATA
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM owners", function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          res.send(result);
        });
    });
});

app.post('/postDate', (req, res)=>{ //CREATING A NEW DATE
    //console.log(req.body.ownerName);
    //res.json(req.body);
});

app.use("/components", exp.static(path.resolve(__dirname, "app", "components")));

app.get("/*",(request, resolve) =>{ //MAIN DASHBOARD
    resolve.sendFile(path.resolve(__dirname, "app", "index.html"));
});

app.listen(process.env.PORT || 5600, function(){ //SERVER'S DEPLOYMENT
    console.log("Server is now working"); 
});


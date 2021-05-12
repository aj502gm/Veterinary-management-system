const exp = require('express');
const path = require('path');

const app = exp();
app.use("/components", exp.static(path.resolve(__dirname, "app", "components")));

app.get("/*",(request, resolve) =>{ //MAIN DASHBOARD
    resolve.sendFile(path.resolve(__dirname, "app", "index.html"));
});

app.listen(process.env.PORT || 5600, function(){
    console.log("Okay");
    // connection.connect(function(err,res){
    //     if(err) throw err;
    //     connection.query("SELECT * FROM cliente", function(err, results, fields){
    //         console.log(results);
    //     });
    // });
});


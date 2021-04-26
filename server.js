const exp = require('express');
const path = require('path');

const app = exp();
app.use("/components", exp.static(path.resolve(__dirname, "app", "components")));

app.get("/*",(request, resolve) =>{ //MAIN DASHBOARD
    resolve.sendFile(path.resolve(__dirname, "app", "index.html"));
});

app.listen(process.env.PORT || 5600, () => console.log('Okay'));
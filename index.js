"use strict";

const port = 8110; //en que puerto va a funcionar
const express = require('express'); //exporta express
const app = express(); //app va a ejecutar express es el servidor

require("./middleware")(app);
require("./private")(app);
require("./router")(app);

app.listen(port, () =>{
    console.log('Usuarios app listening on port', port, '!');
});
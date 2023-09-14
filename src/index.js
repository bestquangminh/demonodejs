const express = require('express');
const app = express();
const port = 3000;

//* GET POST DELET PUT PATCH
// request
// response 
const route = require('./Routes/main');

route(app);



app.listen(port, () => {
    console.log(`its working on ${port}`)
})


//* MVC
//
/*
MODEL: DATABASE
CONTROLLER: XU LY LOGIC 
ROUTE: đường dẫn
 */


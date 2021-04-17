var cons = require('consolidate');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3000;
let cors = require('cors')

app.use(cors()) //Use this after the variable declaration
app.engine('html',cons.swig)
app.set('view engine', 'html');


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: '45.55.136.114',
    user: 'LAFGrp10_S2021',
    password: 'LAF1sLaugh!',
    database: 'LAFGrp10_S2021'
});

// connect to database
mc.connect();
app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route

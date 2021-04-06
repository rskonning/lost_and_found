let express = require("express");
const app = express();
var mysql = require("mysql");
const {con} = require("./connection");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = 3333;
app.listen(port);
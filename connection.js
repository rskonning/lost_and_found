var mysql = require("mysql");

var connection = mysql.createConnection({
    host: '45.55.136.114',
    user: 'LAFGrp10_S2021',
    password: 'LAF1sLaugh!',
    database: 'LAFGrp10_S2021'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;
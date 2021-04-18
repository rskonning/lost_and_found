let express = require("express");
const app = express();
var mysql = require("mysql");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const session = require('express-session');
app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));

let cors = require("cors");
app.use(cors());

app.use('/static', express.static('public'))
app.set('view engine', 'pug');
app.set('views', './views');

var loginC = require("./controller/loginController");
var itemC = require("./controller/itemController");

var routes = require('./routes/appRoutes');
routes(app);

app.route('/login')
            .get(loginC.getLogin)
            .post(loginC.checkCredentials);

app.route('/logout').get(loginC.logout);

app.route('/forgotPassword')
            .get(loginC.passwordForm)
            .post(loginC.sendEmail);

app.route('/userNotFound').get(loginC.notFound);

app.route('/resetSuccessful').post(loginC.resetPassword);

app.route('/guest').get(itemC.getAll);

app.route('/item/:id')
           .get(itemC.getItem)
           .post(itemC.updateItem);

app.route('/item/:id/delete')
            .get(itemC.deleteForm)
            .post(itemC.deleteItem);          

let port = 3333;
app.listen(port);
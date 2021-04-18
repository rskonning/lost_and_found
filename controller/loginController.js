var User = require("../model/userModel");
var {mail} = require("../emailConfig");
var rand = require("../randomString");

exports.getLogin = function(req, res){
    res.render('login');
};

exports.logout = function(req, res){
    req.session.admin = false;
    res.redirect('/login');
};

exports.checkCredentials = function(req, res){
    User.getAll(function(err, users){
        users.forEach(function(user, index){
            if (user.username == req.body.username){
                if (user.password == req.body.password){
                    req.session.admin = true;
                }
            }
        });
        if(req.session.admin == true){
            res.redirect("/item");
        } else {
            res.render("notFound");
        }
    });
};

// gets password form
exports.passwordForm = function(req, res){
    res.render('forgotPassword');
};

// send user email to reset password / tell user that account is not in system
exports.sendEmail = function(req, res){
    // check if email is part of system
    userAccount = false;
    User.getAll(function(err, users){
        users.forEach(function(user, index){
            if(user.username == req.body.username){
                userAccount = true;
            }
        });
        if(userAccount == false){
            res.redirect("/userNotFound");
        } else {
            val = rand.generateString(8);
            var mailOptions = {
                from: 'aulostandfound@gmail.com', 
                to: req.body.username, 
                subject: 'Reset password',
                text: 'Here is the code to reset your password: ' + val
              };
            mail(mailOptions);
            data = {
                val : val,
                username : req.body.username
            }
            res.render('enterCode', data);
        }
    });
};

exports.resetPassword = function(req, res){
    if (req.body.val == req.body.code){
        User.update(req.body.username, req.body.password, function(err, user){
            if(err) throw err;
            res.render('success');
        });
    } else {
        res.render('passwordError');
    }
};

exports.notFound = function(req, res){
    res.render('userNotFound');
};
var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/helloworld', function(req,res){
  res.render('helloworld', {title: 'Hello, World!'});
});
/* GET New User page. */
router.get('/signup', function(req, res) {
    res.render('signup', { title: 'New User signup' });
});
/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable


    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var newUser = User({
      username: userName,
      email: userEmail
    });
    newUser.save(function(err) {
      if (err) throw err;

      res.redirect('/');
    });

    // Set our collection

  });
module.exports = router;
/* GET Helo World pagel. */

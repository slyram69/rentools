var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/'
};


/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tools' });
});
/* GET powertools page. */
router.get('/power', function(req, res, next) {
  // Item.find({'category': 'power'},function(err, products){
  //      console.log(products);
  res.render('power', { title: 'Power Tools' });
});

/* GET penumatictools page. */
router.get('/pneumatic', function(req, res, next) {
  // Item.find({'category': 'penumatic'},function(err, products){
  //      console.log(products);
  res.render('pneumatic', { title: 'Pneumatic Tools' });
});

/* GET machinetools page. */
router.get('/machine', function(req, res, next) {
  // Item.find({'category': 'machine'},function(err, products){
  //      console.log(products);
  res.render('machine', { title: 'Machine Tools' });
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
  });


    // Render the login template
  router.get('/login',
    function(req, res){
      console.log(env);
      res.render('login', { env: env });
    });

  // Perform session logout and redirect to homepage
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  // Perform the final stage of authentication and redirect to '/user'
  router.get('/callback',
    passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
    function(req, res) {
      res.redirect(req.session.returnTo || '/user');
    });

module.exports = router;
/* GET Helo World pagel. */

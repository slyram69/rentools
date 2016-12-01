var express = require('express');
var router = express.Router();
var User = require('../models/user');

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

    // Set our collection

  });
module.exports = router;
/* GET Helo World pagel. */

var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

/* GET users listing. */
//ensureLoggedIn is where the magic happens
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('user', {user: req.user});
});

module.exports = router;

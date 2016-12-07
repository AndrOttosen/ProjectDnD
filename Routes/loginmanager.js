var express = require('express');
var router = express.Router();

module.exports = function(passport){

	router.post('/login', passport.authenticate('login', {
		
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	router.post('/register', passport.authenticate('register', {
		
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'

	}));

	router.get('/success', function(req, res){

		console.log('Success!')
	});

	router.get('/failure', function(req, res){

		console.log('Failure!')
	});

	return router;
};
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Character = require('./../Models/characters');

router.post('/characters', function(req, res){
	var characters = req.body;
	Character.create(characters, function(err, character) {
		if (err) {
			return res.status(500).json({err: err.message});
			console.log(characters);

		}
		res.json(200, characters); // {'name': campaigns, message: 'Campaign Created'}
	})
	
});

module.exports = router;
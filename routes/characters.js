var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Character = require('./../Models/characters');
var User = require('./../Models/users');

router.post('/characters', function(req, res){
	var characterName = req.body.characterName;
	var characterRace = req.body.characterRace;
	var	characterClass = req.body.characterClass;
	var characterBackstory = req.body.characterBackstory;

		var newCharacter = new Character({
			characterName: characterName,
			characterRace: characterRace,
			characterClass: characterClass,
			characterBackstory: characterBackstory,
			user: req.session.passport.user

		});

		newCharacter.save(function (err) {
			if (err) {
				return res.send(err);

			}
			return res.json(newCharacter);
			// body...
		});
});


	// console.log('router')
	// var characters = req.body;
	// characters += req.session.passport.user;
	// Character.create(characters, function(err, character) {
	// 	if (err) {
	// 		return res.status(500).json({err: err.message});
	// 		console.log(characters);

	// 	}
	// 	res.json(200, characters); // {'name': campaigns, message: 'Campaign Created'}
	// })


router.get('/characters', function (req, res) {
	Character.find({user: req.session.passport.user}, function(err, characters) {
		if (err) {
			return res.send(err);
		}
		else{
			return res.json(200, characters);
		}
	
	});

});

router.get('/characters/:id', function(req, res){
        Character.findById(req.params.id, function(err, character){
            console.log(req.params.id)
            if (err){
                res.send(500, err);
            }
            res.json(200, character);
        });
    });

router.get('/users', function (req, res) {
	console.log('er du her?')
	User.find(function(err, users) {
		if (err) {
			return res.send(err);
		}
		else{
			return res.json(200, users);
		}
	});
});

module.exports = router;
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Campaign = require('./../Models/campaigns');

router.get('/campaigns', function(req, res) {
  Campaign.find({}, function(err, campaign) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ campaign: campaign });
  });
});


router.post('/campaigns', function(req, res){
	var campaigns = req.body;
	Campaign.create(campaigns, function(err, campaign) {
		if (err) {
			return res.status(500).json({err: err.message});
			console.log(campaigns);

		}
		res.json(200, campaigns); // {'name': campaigns, message: 'Campaign Created'}
	})
	
});

module.exports = router;
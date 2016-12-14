var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var campaignData = require('./../Models/campaigns');

router.get('/campaigns', function(req, res) {
  campaignData.find({}, function(err, campaign) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ campaign: campaign });
  });
});


router.post('/campaigns', function(req, res){
	var campaigns = req.body;
	campaignData.create(campaigns, function(err, campaign) {
		if (err) {
			return res.status(500).json({err: err.message});
			console.log(campaigns);

		}
		res.json({'campaigns': campaigns, message: 'Campaign Created'});
	})
	
});

module.exports = router;
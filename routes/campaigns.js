var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var campaignData = require('./../Models/campaigns');

// router.post('/campaigns', function (req, res) { // Post funktion for campaigns. 
//   var campaign = new campaign();
//   campaign.campaignName = req.body.campaignName;
 
//   campaign.save(function (err) {
//     if (err)
//       res.send(err);
 
//     res.json({ message: 'Der er oprettet et campaign!!' });
//   });
// });

// router.post('/test', function (req, res) { // Get funktion af ALLE medlemmer.
// var campaign = new campaignData();	
// campaign.campaignName = req.body.campaign;

//   campaignData.save(function (err) {
//     if (err) {
//       res.send(err);
//     }
//     res.json({ message: 'Der er oprettet en campaign' });

//     console.log(campaignData);
//     console.log('data?');
//   });
// });

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
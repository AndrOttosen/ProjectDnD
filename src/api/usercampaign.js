'use strict'
var campaignData = require('./../../Models/campaigns');


var campaigns = [
	'Feed the dog',
	'Walk the kids',
	'Water the trees'
];

campaigns.forEach(function (campaign, index) {
  campaignData.find({ 'name': campaign }, function(err, campaigns) {
  	if (!err && !campaigns.length) {
      campaignData.create({ completed: false, name: campaign });
  	}
  });
});






// var express = require('express');
// var parser = require('body-parser');
// var campaign = require('./js/campaignText.json')

// var campaignRouter = express.Router();
// app.use(parser.json());

// router.get('/campaign', function(req, res){
// 	 res.json({campaign: campaign});

// });


// router.post('/test', function (req, res) { // Post funktion for medlem. 
//   var campaign = new campaign();
//   campaign.campaigns = req.body.campaign;
  
 
//   campaign.save(function (err) {
//     if (err)
//     	console.log(err);
//       res.send(err);
 
//     res.json({ message: 'kkkkkkkkk' });
//   });
// });


// module.exports = campaignRouter;
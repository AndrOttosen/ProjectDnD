var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


// router.post('/campaigns', function (req, res) { // Post funktion for campaigns. 
//   var campaign = new campaign();
//   campaign.campaignName = req.body.campaignName;
 
//   campaign.save(function (err) {
//     if (err)
//       res.send(err);
 
//     res.json({ message: 'Der er oprettet et campaign!!' });
//   });
// });

router.get('/campaigns', function (req, res) { // Get funktion af ALLE medlemmer.
var campaign = new Campaign();	
campaign.campaignName = req.body.campaign;

  campaign.find(function (err, campaign) {
    if (err) {
      res.send(err);
    }
    res.json(campaign);

    console.log(campaign);
  });
});


module.exports = router;





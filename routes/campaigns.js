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

router.post('/test', function (req, res) { // Get funktion af ALLE medlemmer.
var campaign = new campaignData();	
campaign.campaignName = req.body.campaign;

  campaignData.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Der er oprettet en campaign' });

    console.log(campaignData);
    console.log('data?');
  });
});

module.exports = router;





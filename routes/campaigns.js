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


router.get('/campaigns/:id', function(req, res){
        Campaign.findById(req.params.id, function(err, campaign){
            console.log(req.params.id)
            if (err){
                res.send(500, err);
            }
            res.json(200, campaign);
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




    router.delete('/campaigns/:id', function (req, res) {     // <===== defined inside 'put',
        Campaign.remove({_id: req.params.id}, function (err, campaign) {
            if(err){
            return res.send(err);
          } else {
            res.json({message: 'Successfully deleted'});
          }
        });
    });





module.exports = router;
'use strict';

angular.module('userCampaign')
.service('dataService', function($http) {
  this.getCampaigns = function(cb) {
    $http.get('/api/campaigns').then(cb);
};

  this.saveCampaign = function(campaign) {
      var queue = [];
      campaign.forEach(function(campaign) {
        var request;
        if(!campaign._id) {
          request = $http.post('/api/campaigns', campaign);
        } else {
          request = $http.put('/api/campaigns/' + campaign._id, campaign).then(function(result) {
            campaign = result.data.campaign;
            return campaign;
          });
        }
        queue.push(request);
      });
      return $q.all(queue).then(function(results) {
        console.log("I saved " + campaigns.length + " todos!");
      });
    };

  // this.saveCampaign = function(campaignData) {
  //   console.log("I saved " + campaign.length + " d!");
  // };

});



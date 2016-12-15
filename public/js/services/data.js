'use strict';

angular.module('userCampaign')
.service('dataService', function($http) {
  this.getCampaigns = function(cb) {
    $http.get('/api/campaigns').then(cb);
};

  // this.saveCampaign = function(campaignData) {
  //   console.log("I saved " + campaign.length + " d!");
  // };

});



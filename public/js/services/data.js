'use strict';

angular.module('userCampaign')
.service('dataService', function($http) {
  this.getCampaigns = function(cb) {
    $http.get('/mock/campaignText.json').then(cb);
};
  });
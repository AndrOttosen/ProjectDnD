
'use strict';

angular.module('userCampaign')
.directive('campaign', function(){
  return {
    templateUrl: 'header.html',
    replace: true,
    controller: 'mainCtrl'
  }
});
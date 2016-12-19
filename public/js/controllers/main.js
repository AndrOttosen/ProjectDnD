'use strict';

angular.module('userCampaign', [])

.controller('mainCtrl', function($scope, dataService, $http){
	dataService.getCampaigns(function(response) {
		var campaigns = response.data.campaign;
		$scope.campaigns = campaigns;
		console.log(response.data)
	});	



	$scope.campaignGet = function(campaignId) {
		console.log(campaignId);
		$http.get('/api/campaigns/' + campaignId).success(function (data) {
        if (data.state == 'success') {
          console.log('Loaded task');
          $scope.campaign = data;
        } else {
          console.log(data);
          $scope.campaign = data;
        }
      }).error(function (data) {
        console.log(data);
      });
    };



    $scope.campaignDelete = function(campaignId){

    	console.log(campaignId)
    	$http.delete('/api/campaigns/' + campaignId).then(function(response){
    		console.log(response.data);
    		}, function (response) {
			console.log(response.data);
			});

    
    }



})

























































// angular.module("campaignData", [])

// .controller('campaignCtrl', function($scope){
// 	$scope.campaignTest = function(){
// 		$scope.fieldOne = "Campaign One";
// 		$scope.fieldTwo = "Campaign Two";
// 		console.log("Input Changed");
// 	};

// 	$scope.campaigndata = [
// 		{name: 'campaign 1'},
// 		{name: 'campaign 2'}
// 	];

// });






// .service('dataService', function($http){
// 	this.getCampaignData = function(callback) {
// 		$http.get('/js/campaignText.json').then(callback)
		
// 	};
// })




// 	dataService.getCampaignData(function(response){
// 		console.log(response.data);
// 		return response.data;
// 	});

// })

// .service('dataService', function($http){

// 	this.helloWorld = function() {
// 		console.log("data service method");
// 	};

// 	this.getCampaignData = function(callback){
// 		$http.get('js/campaignText.json')
// 		.then (callback)
// 	}
	


//http://stackoverflow.com/questions/28576911/posting-with-angular-to-mongo

'use strict';

angular.module('userCampaign', [])

.controller('mainCtrl', function($scope, dataService){

	dataService.getCampaigns(function(response) {
		var campaigns = response.data;
		$scope.campaigns = campaigns;
		console.log(response.data)
	});
	
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

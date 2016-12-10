"use strict";
angular.module("campaignData", [])

.controller('campaignCtrl', function($scope){
	$scope.campaignTest = function(){
		$scope.fieldOne = "Campaign One";
		$scope.fieldTwo = "Campaign Two";
		console.log("Input Changed");
	};

	$scope.campaigndata = [
		{name: 'campaign 1'},
		{name: 'campaign 2'}
	];

	dataService.getCampaignData(function(response){
		console.log(response.data);
		return response.data;
	});

})

.service('dataService', function($http){

	this.helloWorld = function() {
		console.log("data service method");
	};

	this.getCampaignData = function(callback){
		$http.get('js/campaignText.json')
		.then (callback)
	}
	
});

http://stackoverflow.com/questions/28576911/posting-with-angular-to-mongo
http://stackoverflow.com/questions/28576911/posting-with-angular-to-mongo
http://stackoverflow.com/questions/28576911/posting-with-angular-to-mongo
http://stackoverflow.com/questions/28576911/posting-with-angular-to-mongo
http://stackoverflow.com/questions/28576911/posting-with-angular-to-mongo


	

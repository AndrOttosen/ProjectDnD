'use strict';

angular.module('userCampaign', [])
angular.module('userCharacter', [])
angular.module('userAdd', [])

.controller('mainCtrl', function($scope, dataService, dataService2, dataService3, $http){
	dataService.getCampaigns(function(response) {
		var campaigns = response.data.campaign;
		$scope.campaigns = campaigns;
		console.log(response.data);

	});	

  dataService2.getCharacters(function(response){
    var characters = response.data; 
    $scope.characters = characters;
    console.log(response.data)

  });

  dataService3.getUsers(function(response){
    var users = response.data; 
    $scope.users = users;
    console.log(response.data)

  });

  
    // $http.get('app/characters').success(function(data) {
    //   console.log(data);
    //   if(data){
    //     console.log('character found');
    //     $scope.characters = data;
    //   }
    //   else{
    //     console.log(data);
    //   };      
    // }).error(function(data){
    //   console.log(data);
    // });
    

  $scope.characterGet = function(characterId) {
    console.log(characterId);
    $http.get('/app/characters/' + characterId).success(function (data) {
        if (data.state == 'success') {
          console.log('Loaded task');
          $scope.character = data;
        } else {
          console.log(data);
          $scope.character = data;
        }
      }).error(function (data) {
        console.log(data);
      });
    };


    $scope.charEdit = function(characterId) {
      console.log(characterId)
      $http.put('/app/characters/' + characterId, $scope.character).then(function(response){
        console.log(response.data);
        }, function (response) {
      console.log(response.data);
      });    
      }

    $scope.Shar = function (argument) {

      // body...
    }








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

    // mean-stack er hvertfald sværererere end html. #truth

    $scope.campaignDelete = function(campaignId){

    	console.log(campaignId)
    	$http.delete('/api/campaigns/' + campaignId).then(function(response){
    		console.log(response.data);
    		}, function (response) {
			console.log(response.data);
			});    
    }

    $scope.campaignPut = function(campaignId) {
  		console.log(campaignId)
    	$http.put('/api/campaigns/' + campaignId, $scope.campaign).then(function(response){
    		console.log(response.data);
    		}, function (response) {
			console.log(response.data);
			});    
      }

       $scope.saveCampaigns = function() {
        var filteredcampaign = $scope.campaigns.filter(function(campaign){
        if(campaign.edited) {
        return camppaign
        };
      })
       
  };

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

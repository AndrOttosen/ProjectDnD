'use strict';
 
 /* App Module */

 angular.module('angular', [
  'ui.router',
  'userCampaign',
  'userCharacter'
])

.config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
 	
 	 $urlRouterProvider.when('', '/frontpage');
 	 $urlRouterProvider.otherwise("/404");

  $stateProvider

  .state('frontpage', {
    url: '/frontpage',
    templateUrl: 'views/frontpage.html'
  })

    .state('newCampaign', {
    url: '/campaign-1',
    templateUrl: 'views/newCampaign.html'
  })
   .state('register', {
    url: '/register',
    templateUrl: 'views/register.html'
  })

    .state('pastCampaigns', {
    url: '/pastCampaigns',
    templateUrl: 'views/pastCampaigns.html'
  })

  .state('login', {
  	url: '/login',
  	templateUrl: 'views/login.html'

  })

  .state('campaign', {
    url: '/campaign',
    templateUrl: 'views/campaign.html'
  })

  .state('planCampaign', {
    url: '/planCampaign',
    templateUrl: 'views/planCampaign.html'
  })

    .state('setupCampaign', {
    url: '/setupCampaign',
    templateUrl: 'views/setupCampaign.html'
  })

     .state('charactersInCampaign', {
    url: '/charactersInCampaign',
    templateUrl: 'views/charactersInCampaign.html'
  })

  .state('currentCampaigns', {
    url: '/currentCampaigns',
    templateUrl: 'views/currentCampaigns.html'
  })

  .state('yourScenes', {
    url: '/yourScenes',
    templateUrl: 'views/yourScenes.html'
  })

  .state('presetCampaigns', {
    url: '/presetCampaigns',
    templateUrl: 'views/presetCampaigns.html'
  })

    .state('inviteFriends', {
    url: '/inviteFriends',
    templateUrl: 'views/inviteFriends.html'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'views/profile.html'
  })

    .state('yourCharacters', {
    url: '/yourCharacters',
    templateUrl: 'views/yourCharacters.html'
  })

  .state ('creatercharacter', {
    url: '/createcharacter',
    templateUrl: 'views/createcharacter.html'
  })

  .state ('test', {
    url: '/test',
    templateUrl: 'views/test.html'
  }); 
})

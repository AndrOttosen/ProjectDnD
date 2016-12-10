'use strict';
 
 /* App Module */

 angular.module('angular', [
  'ui.router',
  'userModule'

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
    url: '/campaign-3',
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

  .state('profile', {
    url: '/profile',
    templateUrl: 'views/profile.html'
  })

  .state('currentCampaign', {
    url: '/campaign-2',
    templateUrl: 'views/currentCampaign.html'
  })

  .state ('creatercharacter', {
    url: '/createcharacter',
    templateUrl: 'views/createcharacter.html'
  });
})

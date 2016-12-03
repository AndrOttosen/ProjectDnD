'use strict';
 
 /* App Module */

 angular.module('angular', [
  'ui.router'

])

.config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
 	
 	 $urlRouterProvider.when('', '/frontpage');
 	 $urlRouterProvider.otherwise("/404");

  $stateProvider

  .state('frontpage', {
    url: '/frontpage',
    templateUrl: 'views/frontpage.html'
  })

  .state('login', {
  	url: '/login',
  	templateUrl: 'views/login.html'

  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'views/profile.html'
  });
})

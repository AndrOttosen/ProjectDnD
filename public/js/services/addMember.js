'use strict';

angular.module('userAdd')

.service('dataService3', function($http){
this.getUsers = function(cb) {
	console.log('service User');
    $http.get('/app/users').then(cb);
};

});


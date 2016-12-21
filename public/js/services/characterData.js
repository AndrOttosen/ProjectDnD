'use strict';

angular.module('userCharacter')

.service('dataService2', function($http){
this.getCharacters = function(cb) {
    $http.get('/app/characters').then(cb);
};

});


'use strict';

angular.module('userCampaign')
.service('dataService', function($http) {
  this.getCampaigns = function(cb) {
    $http.get('/api/campaigns').then(cb);
};

this.saveTodos = function(todos) {
    var queue = [];
    todos.forEach(function(todo) {
      var request;
      if(!todo._id) {
        request = $http.post('/api/todos', todo);
      } else {
        request = $http.put('/api/todos/' + todo._id, todo).then(function(result) {
          todo = result.data.todo;
          return todo;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + todos.length + " todos!");
    });
  };

  // this.saveCampaign = function(campaignData) {
  //   console.log("I saved " + campaign.length + " d!");
  // };

});



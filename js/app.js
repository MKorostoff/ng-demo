var app = angular.module('MyDemoApp', []);

app.controller('athleteSearch', function($scope, $http, $window) {
  
  $http({
    method: 'GET',
    url: '/data/names.php'
  }).then(function successCallback(response) {
    $scope.names = response.data
  });
  
  $scope.order = 'lastName';
  $scope.sort = function(order) {
    console.log(order);
    $scope.order = order;
  };
  
  $scope.vote = function(id) {
    (!$scope.names[id].votes) ? $scope.names[id].votes = 1 : $scope.names[id].votes++;
  }

  $scope.fire = function(id) {
    $scope.names[id].fired = true;
    delete $scope.names[id].votes;
  }
  
});


var app = angular.module('MyDemoApp', []);

app.controller('athleteSearch', function($scope, $http, $window) {
  
  $http({
    method: 'GET',
    url: '/data/names.php'
  }).then(function successCallback(response) {
    $scope.names = response.data
    
    $scope.pages = new Array;
    for (page = 1; page < $scope.names.length / $scope.pageSize + 1; page++) {
      $scope.pages.push(page);
    }

  });
  
  $scope.order = 'lastName';
  $scope.sort = function(order) {
    $scope.order = order;
  };
  
  $scope.vote = function(id) {
    (!$scope.names[id].votes) ? $scope.names[id].votes = 1 : $scope.names[id].votes++;
  }

  //Fire the employee
  $scope.fire = function(id) {
    $scope.names[id].fired = true;
    delete $scope.names[id].votes;
  }

  $scope.firstItem = 0;
  $scope.pageSize = 10;
  $scope.currentPage = 1;

  $scope.nextPage = function() {
    $scope.firstItem = $scope.firstItem + $scope.pageSize;    
    $scope.currentPage++;
  }

  $scope.previousPage = function() {
    $scope.firstItem = $scope.firstItem - $scope.pageSize;    
    $scope.currentPage--;
  }
  
  $scope.gotoPage = function(page) {
    $scope.currentPage = page;
    $scope.firstItem = (page - 1) * $scope.pageSize;    
  }

  $scope.save = function() {
    $http({
      method : 'POST',
      url : '/data/submit.php',
      data : $scope.names
    })
  }

});


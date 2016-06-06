var app = angular.module('MyDemoApp', []);

app.controller('athleteSearch', function($scope, $http, $window) {
  
  $http({
    method: 'GET',
    url: '/data/names.php'
  }).then(function successCallback(response) {
    $scope.names = response.data
  });
  
  $scope.resize = function() {
    $scope.short = false;
    if (window.innerWidth < 800) {
      $scope.short = true;
    }
  };

  $scope.order = 'lastName';
  $scope.sort = function(order) {
    console.log(order);
    $scope.order = order;
  };
  
  $scope.vote = function(id) {
    $scope.names[id].votes++;
  }

  $scope.fire = function(id) {
    $scope.names[id].fired = true;
  }

  $scope.resize();
  angular.element($window).bind('resize', function() {
    $scope.resize();
    $scope.$apply();
  });

});


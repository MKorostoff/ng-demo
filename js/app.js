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

  $scope.order = 'id';
  $scope.sort = function(order) {
    $scope.order = order;
  };

  $scope.resize();
  angular.element($window).bind('resize', function() {
    $scope.resize();
    $scope.$apply();
  });

});


var app = angular.module('MyDemoApp', []);

app.controller('athleteSearch', function($scope) {
  $scope.lastName = 'Korostoff';
  $scope.shortName = 'Matt';
  $scope.longName = 'Matthew';
  
  $scope.short = false;
  if (window.innerWidth < 800) {
    $scope.short = true;
  }
});

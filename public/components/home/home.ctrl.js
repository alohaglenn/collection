angular.module('collection')

.controller('homeCtrl', ['$scope', 'home', function($scope, home) {

  $scope.tag = home.tag;

  $scope.$watch('tag', function() {
    console.log('$scope.tag', $scope.tag);
    home.tag = $scope.tag;
  });

}]);
angular.module('collection')

.controller('homeCtrl', ['$scope', 'homeService', function($scope, homeService) {

  $scope.tag = homeService.tag;

  $scope.$watch('tag', function() {
    console.log('$scope.tag', $scope.tag);
    homeService.tag = $scope.tag;
  });

}]);
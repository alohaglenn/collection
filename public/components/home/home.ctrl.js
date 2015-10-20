angular.module('collection')

.controller('homeCtrl', ['$scope', 'homeService', function($scope, homeService) {

  $scope.tag = homeService.tag;

  $scope.$watch('tag', function() {
    homeService.tag = $scope.tag;
  });

}]);
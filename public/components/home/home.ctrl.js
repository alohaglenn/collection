angular.module('collection')

.controller('homeCtrl', ['$scope', 'homeService', function($scope, homeService) {

  $scope.bgimg = './assets/ig.jpg';

  $scope.tag = homeService.tag;

  $scope.$watch('tag', function() {
    homeService.tag = $scope.tag;
  });

}]);
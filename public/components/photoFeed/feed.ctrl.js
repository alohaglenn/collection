angular.module('collection')

.controller('feedCtrl', ['$scope', 'feedService', 'homeService', function($scope, feedService, homeService) {

 $scope.tag = homeService.tag;

 $scope.photos = [];

 feedService.getResults(function(data) {
  $scope.photos = data;
  console.log('photos: ',$scope.photos);
 });

}]);
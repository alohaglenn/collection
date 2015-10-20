angular.module('collection')

.controller('feedCtrl', ['$scope', 'feed', function($scope, feed) {

 $scope.photos = [];

 feed.getResults(function(data) {
  $scope.photos = data;
  console.log('photos: ',$scope.photos);
 });

}]);
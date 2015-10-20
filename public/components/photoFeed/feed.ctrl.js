angular.module('collection')

.controller('feedCtrl', ['$scope', 'feed', 'home', function($scope, feed, home) {

 $scope.tag = home.tag;

 $scope.photos = [];

 feed.getResults(function(data) {
  $scope.photos = data;
  console.log('photos: ',$scope.photos);
 });

}]);
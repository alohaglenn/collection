angular.module('collection')

.controller('feedCtrl', ['$scope', '$resource', 'APIcred', 'homeService', function($scope, $resource, APIcred, homeService) {

 $scope.tag = homeService.tag;

 $scope.photos = [];

 $scope.nextUrl = '';

 var getResults = function(cbk) {
    var tagName = $scope.tag;
    var api = $resource('https://api.instagram.com/v1/tags/' + tagName + '/media/recent?client_id=client_id&callback=JSON_CALLBACK', 
      {
        client_id: APIcred.CLIENT_ID,
      },
      {
      get: {
        method: 'JSONP'
      }
    });

    api.get(function(res) {
      cbk(res);
    });
 };

 getResults(function(data) {
  console.log('data', data);
  console.log('data.pagination', data.pagination.next_url);
  $scope.nextUrl = data.pagination.next_url;
  $scope.photos = data.data;
  console.log('nextUrl', $scope.nextUrl)
  console.log('photos: ',$scope.photos);
 });

}]);
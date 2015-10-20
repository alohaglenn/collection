angular.module('collection')

.controller('feedCtrl', ['$scope', '$resource', 'APIcred', 'homeService', function($scope, $resource, APIcred, homeService) {

 $scope.tag = homeService.tag;

 $scope.photos = [];

 var getResults = function(cbk) {
      var api = $resource('https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=client_id&callback=JSON_CALLBACK', 
        {
          client_id: APIcred.CLIENT_ID,
        },
        {
        get: {
          method: 'JSONP', 
          params: { q: 'hellothere' }
        }
      });

      api.get(function(res) {
        cbk(res.data);
      });
 };

 getResults(function(data) {
  $scope.photos = data;
  console.log('photos: ',$scope.photos);
 });

}]);
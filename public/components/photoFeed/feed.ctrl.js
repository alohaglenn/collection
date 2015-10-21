angular.module('collection')

.controller('feedCtrl', ['$scope', '$resource', 'homeService', function($scope, $resource, homeService) {

 $scope.tag = homeService.tag;

 $scope.photos = [];

 // $scope.nextMaxID;

 var getResults = function(cbk) {
    var tagName = $scope.tag;
    var nextMaxID = $scope.nextMaxID;
    var api = $resource('https://api.instagram.com/v1/tags/' + tagName + '/media/recent?client_id=client_id&callback=JSON_CALLBACK', 
      // {
      //   client_id: APIcred.CLIENT_ID, // running locally
      // },
      {
        client_id: ENV['CLIENT_ID'], // heroku
      },
      {
      get: {
        method: 'JSONP', 
        params: { count: 20}
      }
    });

    api.get(function(res) {
      cbk(res);
    });
 };

 getResults(function(data) {

  $scope.nextUrl = data.pagination.next_url;
  $scope.nextMaxID = '&max_tag_id=' + data.pagination.next_max_id;
  $scope.photos = data.data;

  // for(var i = 0; i < $scope.photos.length; i++) {
  //   if($scope.photos[i].type === 'video') { 
  //     console.log('$$$$$$$$$$$$$$$$: ',$scope.photos[i]);
  //     $scope.photos[i].images.low_resolution.url = $scope.photos[i].videos.low_bandwidth.url;
  //   }
  // }

  console.log('data', data);
  console.log('data.pagination', data.pagination.next_url);
  console.log('nextMaxID:', $scope.nextMaxID);
  console.log('nextUrl', $scope.nextUrl);
  console.log('photos: ',$scope.photos);

 });

 // $scope.getNextPage = function() {
 //  console.log('testing123');
 // };

}]);








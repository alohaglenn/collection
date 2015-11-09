angular.module('collection')

.controller('feedCtrl', ['$scope', '$http', '$resource', 'homeService', function($scope, $http, $resource, homeService) {

 $scope.tag = homeService.tag; //binds data entered in search bar on home page

 $scope.photos = []; //array of results from API call

 $scope.min = 0;

 // $scope.key = '';

 var getResults = function(cbk) {
    var tagName = $scope.tag;
    // var nextMaxID = $scope.nextMaxID; //need for pagination later 
    var api = $resource('https://api.instagram.com/v1/tags/' + tagName + '/media/recent?client_id=client_id&callback=JSON_CALLBACK', 
      {
        client_id: '82df4d469f0f4e7f82ac8a7e3226c907', //grabs CLIENT_ID from APIcred.js
      },
      {
      get: {
        method: 'JSONP', //JSONP needed to handle cross-domain AJAX
        params: { count: 20} //count displays the desired number of photos
      }
    });

    api.get(function(res) {
      cbk(res);
    });
 };

 getResults(function(data) { //call getResults to get the data
  $scope.photos = data.data; //data returns IG object

  // $scope.nextUrl = data.pagination.next_url;
  // $scope.nextMaxID = '&max_tag_id=' + data.pagination.next_max_id;

  // for(var i = 0; i < $scope.photos.length; i++) {
  //   if($scope.photos[i].type === 'video') { 
  //     console.log('$$$$$$$$$$$$$$$$: ',$scope.photos[i]);
  //     $scope.photos[i].images.low_resolution.url = $scope.photos[i].videos.low_bandwidth.url;
  //   }
  // }

  // console.log('data', data);
  // console.log('data.pagination', data.pagination.next_url);
  // console.log('nextMaxID:', $scope.nextMaxID);
  // console.log('nextUrl', $scope.nextUrl);
  // console.log('photos: ',$scope.photos);

 });

 // $scope.getNextPage = function() {
 //  console.log('testing123');
 // };

}]);








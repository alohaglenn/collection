// angular.module('collection')

// .service('feedService', function($resource, APIcred) {

//   return {
//     getResults: function(cbk) {
//       var tagName;
//       $scope = '';
//       var api = $resource('https://api.instagram.com/v1/tags/' + tagName + '/media/recent?client_id=client_id&callback=JSON_CALLBACK', 
//         {
//           client_id: APIcred.CLIENT_ID,
//         },
//         {
//         get: {
//           method: 'JSONP', 
//           params: { q: 'hellothere' }
//         }
//       });

//       api.get(function(res) {
//         cbk(res.data);
//       });
//     }
//   };

// });
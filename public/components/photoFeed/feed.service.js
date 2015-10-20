angular.module('collection')

.service('feedService', function($resource, APIcred, homeService) {

  return {
    getResults: function(cbk) {
      var tagName;
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
        cbk(res.data);
      });
    }
  };

});
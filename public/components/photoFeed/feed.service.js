angular.module('collection')

.service('feed', function($resource, APIcred) {

  return {
    getResults: function(cbk) {
      var tagName = 'aloha';
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
        // console.log('res', res);
        cbk(res.data);
      });
    }
  };

});
  ///////////////////
 //    MODULE     //
///////////////////

var app = angular.module('collection', ['ngRoute', 'ngResource']);

  ///////////////////
 //    ROUTES     //
///////////////////

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'components/photoFeed/feed.view.html',
      controller: 'feedCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
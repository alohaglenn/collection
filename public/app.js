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
      templateUrl: '',
      controller: ''
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
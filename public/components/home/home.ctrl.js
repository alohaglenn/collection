angular.module('collection')

.controller('homeCtrl', ['$scope', '$location', 'homeService', function($scope, $location, homeService) {

  $scope.bgimg = './assets/ig.jpg'; //setting background image for home view

  $scope.tag = homeService.tag; //sets the tag for API call

  $scope.$watch('tag', function() { //watches for changes on user input in search bar
    homeService.tag = $scope.tag;
  });

  $scope.submit = function() {
    $location.path('/results');
  };

}]);
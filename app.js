angular.module('wineApp', ['ngRoute', 'wineControllers'])

.config(['$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'WinesCtrl'
    });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}]);
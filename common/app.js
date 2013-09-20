'use strict';


// Declare app level module which depends on filters, and services
var movieApp = angular.module('movieApp', []);

// Routes
angular.module('movieApp').
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'product/index.html', controller: 'ProductController'})
  }]);


// angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
//   config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//     $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//     $routeProvider.otherwise({redirectTo: '/view1'});
//   }]);
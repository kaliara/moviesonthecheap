'use strict';


// Declare app level module which depends on filters, and services
var movieApp = angular.module('movieApp', []);

// Routes
angular.module('movieApp').
  config(['$routeProvider', function($routeProvider, $routeParams) {
    $routeProvider.when('/products', {templateUrl: 'product/index.html', controller: 'ProductController'});
    $routeProvider.when('/products/:id', {templateUrl: 'product/detail.html', controller: 'ProductDetailController'});
    $routeProvider.when('/cart', {templateUrl: 'cart/index.html', controller: 'CartController'});
    $routeProvider.when('/checkout', {templateUrl: 'purchase/new.html', controller: 'PurchaseController'});
    $routeProvider.otherwise({redirectTo: 'home.html'});
  }]);
'use strict';

movieApp.controller('CartController', function CartController($scope, $routeParams) {
  $scope.cart_item = { product_id: $routeParams.id }
  
  $scope.addProductToCart = function(cart_item, form) {
    console.log(cart_item);
  }
});
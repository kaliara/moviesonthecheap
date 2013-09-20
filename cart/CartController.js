'use strict';

movieApp.controller('CartController', function CartController($scope, $routeParams, CartModel) {
  $scope.cart_item = { product_id: $routeParams.id }
  $scope.cart_items = CartModel.getCartItems();
  
  $scope.addProductToCart = function(cart_item, form) {
    console.log(cart_item);
    
    if(form.$valid) {
      CartModel.addCartItem(cart_item);
      // window.location = "#/cart";
      console.log(CartModel.getCartItems());
    }
  }
});
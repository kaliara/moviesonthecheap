'use strict';

movieApp.controller('CartController', function CartController($scope, $routeParams, CartModel, CartItemModel) {
  $scope.cart_item = { product_id: $routeParams.id }
  $scope.cart_items = CartModel.getCartItems();
  $scope.cart_total = CartModel.getCartTotal();
  
  $scope.addProductToCart = function(cart_item, form) {
    if (form.$valid) {
      var new_cart_item = CartItemModel.newCartItem(cart_item);
      CartModel.addCartItem(new_cart_item);
      window.location = "#/cart";
    }
  }

  $scope.removeProductFromCart = function(cart_item) {
    CartModel.removeCartItem(cart_item);
    CartModel.refreshCart();
    $scope.cart_total = CartModel.getCartTotal();
  }
  
  $scope.emptyCart = function() {
    CartModel.emptyCart();
  }
});
'use strict';

movieApp.factory('CartModel', function() {
  var cart = { created_on: new Date(), cart_items: [] }
  
  return {
    getCartItems: function() {
      return cart.cart_items;
    },
    
    addCartItem: function(cart_item) {
      cart.cart_items.push(cart_item);
    },
    
    resetCart: function() {
      cart.cart_items = [];
    },
  }
});
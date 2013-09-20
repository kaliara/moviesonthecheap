'use strict';

movieApp.factory('CartModel', function() {
  var cart = { created_on: new Date(), cart_items: [] };
  
  return {
    getCartItems: function() {
      return cart.cart_items;
    },
    addCartItem: function(cart_item) {
      cart.cart_items.push(cart_item);
    },
    removeCartItem: function(cart_item) {
      cart_item.quantity = 0;
    },
    emptyCart: function() {
      cart.cart_items.splice(0);
    },
    refreshCart: function() {
      for (var i = 0; i < cart.cart_items.length; i++) {
        if (cart.cart_items[i].quantity == 0) {
          cart.cart_items.splice(i, 1);
        }
      }
    },
    getCartTotal: function() {
      var total = 0, items = cart.cart_items;
      for (var i = 0; i < items.length; i++) {
        total += (items[i].price * items[i].quantity);
      }
      return total;
    },
  }
});
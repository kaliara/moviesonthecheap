'use strict';

movieApp.factory('CartModel', function() {
  var cart = { created_on: new Date(), cart_items: [{"name":"AMC Movie Tickets","product_id":"1","price":6.5,"quantity":"10"},{"name":"Regal Movie Tickets","product_id":"2","price":6.5,"quantity":"15"}]  };
  
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
      cart.cart_items = [];
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
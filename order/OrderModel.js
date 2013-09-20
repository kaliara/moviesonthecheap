'use strict';

movieApp.factory('OrderModel', function(){
  var order_items = [];
  
  return {
    newOrder: function(cart) {
      var items = cart.getCartItems();
      for (var i = 0; i < items.length; i++) {
        order_items.push({
          name: items[i].name,
          quantity: parseInt(items[i].quantity),
        });
      }  
      return order_items;
    },
    saveOrder: function(purchase) {
      for (var i = 0; i < order_items.length; i++) {
        var item = order_items[i];
        item.purchase_id = purchase.id;
        var ParseOrderItem = Parse.Object.extend("OrderItem");
        var parse_order_item = new ParseOrderItem();
        parse_order_item.save(item);
      }
    },
  }
});
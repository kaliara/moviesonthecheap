'use strict';

movieApp.factory('CartItemModel', function(ProductModel) {
  
  return {
    newCartItem: function(cart_item) {
      var product = ProductModel.getProduct(cart_item.product_id);
      return {
        name: product.name,
        product_id: cart_item.product_id,
        price: product.price,
        quantity: cart_item.quantity,
      }
    }
  }
})
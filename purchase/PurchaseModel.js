'use strict';

movieApp.factory('PurchaseModel', function(){
  var purchase = {
    created_at: "",
    total: 0,
    invoice_number: 0,
    name_on_card: "",
    card_number: "",
    expiration_month: 0,
    expiration_year: 0,
    order_id: 0,
  };

  return {
    newPurchase: function(cart) {
      purchase.created_at = new Date ();
      purchase.total = cart.getCartTotal();
      purchase.invoice_number = purchase.created_at.valueOf();
      return purchase;
    },
    savePurchase: function(new_purchase, callback) {
      var ParsePurchase = Parse.Object.extend("Purchase");
      var parse_purchase = new ParsePurchase();
      parse_purchase.save(new_purchase, 
        {
          success: function(object) {
            alert("Purchase Completed");
            callback(object);
        }
      });
    },
  }
});
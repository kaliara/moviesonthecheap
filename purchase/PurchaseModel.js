'use strict';

movieApp.factory('PurchaseModel', function(){
  return {
    purchase: {
      created_at: new Date(),
      total: 0,
      invoice_number: 0,
      customer_id: 0,
    }
  }
});
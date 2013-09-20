'use strict';

movieApp.factory('ProductModel', function() {
  return {
    products: [
      {
        name: 'AMC Movie Tickets',
        price: 650,
      },
      {
        name: 'Regal Movie Tickets',
        price: 650,
      }
    ]
  }
});

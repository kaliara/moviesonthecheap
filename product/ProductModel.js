'use strict';

movieApp.factory('ProductModel', function() {
  return {
    products: [
      {
        id: 1,
        slug: 'amc',
        name: 'AMC Movie Tickets',
        price: 6.50,
        locations: 'All AMC, Loews, Cineplex Odeon, Magic Johnson and Star theatres in the United States.',
        description: 'AMC Experience Tickets are redeemable for movie tickets at all AMC theaters and AMC theater partners. Simply present your ticket at the Box Office and see a great show at a great discount.',
        restrictions: 'Valid seven days a week. Tickets cannot be used for Special Engagements, which are noted at the box office and are typically the first 10-14 days of a film\'s release. However, they may be upgraded at the box office. Surcharges may apply for special events and for enhanced movie experiences, such as RealD 3D, IMAX, and ETX films. Please contact your local theatre for specific details.',
      },
      {
        id: 2,
        slug: 'regal',
        name: 'Regal Movie Tickets',
        price: 6.50,
        locations: 'All Regal, Edward and United Artists theaters in the United States.',
        description: 'Regal VIP Tickets are redeemable for movie tickets at all Regal theaters and Regal theater partners. Simply present your ticket at the Box Office and see a great show at a great discount.',
        restrictions: 'Valid seven days a week. Tickets cannot be used for Special Engagements, which are noted at the box office and are typically the first 10-14 days of a film\'s release. However, they may be upgraded at the box office. Surcharges may apply for special events and for enhanced movie experiences, such as 3D, IMAX, and RPX films. Please contact your local theatre for specific details',
      }
    ]
  }
});

'use strict';

movieApp.controller('PurchaseController', function PurchaseController($scope, PurchaseModel, CartModel, OrderModel){
  $scope.purchase = PurchaseModel.newPurchase(CartModel);
  
  $scope.submitPurchase = function(purchase, newPurchaseForm) {
    if (newPurchaseForm.$valid) {
      PurchaseModel.savePurchase(purchase, function(purchase) {
        OrderModel.newOrder(CartModel);
        OrderModel.saveOrder(purchase);
        CartModel.emptyCart();
        window.location = "#/home.html";
      });
    }
  }
});
'use strict';

movieApp.controller('ProductDetailController', function ProductDetailController($scope, $routeParams, ProductModel) {
  $scope.product = ProductModel.getProduct($routeParams.id);
});
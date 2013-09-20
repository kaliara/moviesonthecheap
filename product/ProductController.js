'use strict';

movieApp.controller('ProductController', function ProductController($scope, ProductModel){
  $scope.products = ProductModel.products;
});
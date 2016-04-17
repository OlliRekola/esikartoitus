'use strict';



var itemControllers = angular.module('itemControllers', []);


itemControllers.controller('ItemListCtrl', ['$scope', 'Item',
  function($scope, Item) {
      $scope.items = Item.query();
    $scope.orderProp = 'priceCents';
   

//Antaa hinta hakuun arvot, jos jompikumpi kenttä tyhjänä    
  $scope.byRange = function (fieldName, minValue, maxValue) {
    
    if (minValue === null || minValue === undefined) minValue = Number.MIN_VALUE;
        
    if (maxValue === null || maxValue === undefined) maxValue = Number.MAX_VALUE;
    
  return function predicateFunc(item) {
    return minValue*100 <= item[fieldName] && item[fieldName] <= maxValue*100;
  };
};  

  }]);

  //hakee valitun kohteen tiedot
  itemControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item',
  function($scope, $routeParams, Item) {     
      $scope.items = Item.query(); 
      $scope.iid = $routeParams.itemId;        
    
  }]);
   //uuden kohteen tallennus
    itemControllers.controller('NewItemCtrl', ['$scope', 'Item', '$location',
    function($scope, Item, $resource) {     
      $scope.createNewItem = function(){
        $scope.item.priceCents = $scope.item.priceCents*100
        console.log($scope.item.priceCents);
        $scope.item;
        console.log($scope.item);


        Item.save($scope.item, function(){
           console.log("tallennettu");
           window.location.href = '#/success';
       });
      }      
    
  }]);


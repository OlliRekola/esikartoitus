'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'itemControllers',
  'itemServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/items', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).
      when('/items/:itemId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      when('/additem', {
        templateUrl: 'partials/item-add.html',
        controller: 'NewItemCtrl'
      }).
      when('/success', {
        templateUrl: 'partials/item-success.html'
      }).
      otherwise({
        redirectTo: '/items'
      });
  }]);

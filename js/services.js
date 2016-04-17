
var itemServices = angular.module('itemServices', ['ngResource']);

itemServices.factory('Item', ['$resource',
  function($resource){
    return $resource('http://mepa-store-api.herokuapp.com/marketads/:id', {}, {
      query: {method:'GET', isArray:true},
      save: {method: 'POST'}
    });
  }]);
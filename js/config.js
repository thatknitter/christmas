;(function(){
    'use strict';
  angular.module('partyApp')
      .config(function($routeProvider){
          $routeProvider
              .when('/', {
                  templateUrl: 'views/coming_soon.html',

              })
              .when('/:id', {
                  templateUrl: 'views/wish.html',
                  controller: 'ShowController',
                  controllerAs: 'show'
              })
              .otherwise({redirectTo: '/'});
      })
}());
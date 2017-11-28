;(function(){
    'use strict';
  angular.module('contactApp')
      .config(function($routeProvider){
          $routeProvider
              .when('/', {
                  templateUrl: 'views/create.html',
                  controller: 'ContactController'

              })
              .when('/:id', {
                  templateUrl: 'views/wish.html',
                  controller: 'ShowController',
                  controllerAs: 'show'
              })
              .otherwise({redirectTo: '/'});
      })
}());
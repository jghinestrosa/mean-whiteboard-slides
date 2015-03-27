'use strict';

/**
 * @ngdoc overview
 * @name slidesApp
 * @description
 * # slidesApp
 *
 * Main module of the application.
 */
angular
  .module('slidesApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

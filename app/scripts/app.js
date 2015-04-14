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
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/1.html'
      })
      .when('/2', {
        templateUrl: 'views/2.html'
      })
      .when('/3', {
        templateUrl: 'views/3.html'
      })
      .when('/4', {
        templateUrl: 'views/4.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });

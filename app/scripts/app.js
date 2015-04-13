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
        templateUrl: 'views/1.html',
        controller: 'MainCtrl'
      })
      .when('/2', {
        templateUrl: 'views/2.html',
        controller: 'MainCtrl'
      })
      .when('/3', {
        templateUrl: 'views/3.html',
        controller: 'MainCtrl'
      })
      .when('/4', {
        templateUrl: 'views/4.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });

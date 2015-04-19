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
        templateUrl: 'views/cover.html'
      })
      .when('/2', {
        templateUrl: 'views/angularLearningCurve.html'
      })
      .when('/3', {
        templateUrl: 'views/ngRouteDiagram.html'
      })
      .when('/4', {
        templateUrl: 'views/viewControllersGroup.html'
      })
      .when('/5', {
        templateUrl: 'views/html5.html'
      })
      .when('/6', {
        templateUrl: 'views/html5components.html'
      })
      .when('/7', {
        templateUrl: 'views/canvas.html'
      })
      .when('/8', {
        templateUrl: 'views/dragAndDrop.html'
      })
      .when('/9', {
        templateUrl: 'views/localStorage.html'
      })
      .when('/10', {
        templateUrl: 'views/angularJS.html'
      })
      .when('/11', {
        templateUrl: 'views/dependencyInjection.html'
      })
      .when('/12', {
        templateUrl: 'views/dataBindingDiagram.html'
      })
      .when('/13', {
        templateUrl: 'views/dataBindingExample.html'
      })
      .when('/14', {
        templateUrl: 'views/resizeCanvas.html'
      })
      .when('/15', {
        templateUrl: 'views/webSocketsDiagram.html'
      })
      .when('/16', {
        templateUrl: 'views/socketioDiagram.html'
      })
      .when('/17', {
        templateUrl: 'views/newUserCommunication.html'
      })
      .when('/18', {
        templateUrl: 'views/joinAnotherUser.html'
      })
      .when('/19', {
        templateUrl: 'views/usersNormalCommunication.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });

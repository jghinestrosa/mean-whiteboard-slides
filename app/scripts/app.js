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
        templateUrl: 'views/contents.html'
      })
      .when('/3', {
        templateUrl: 'views/motivation.html'
      })
      .when('/4', {
        templateUrl: 'views/objetives.html'
      })
      .when('/5', {
        templateUrl: 'views/githubProgress.html'
      })
      .when('/6', {
        templateUrl: 'views/rankingGitHub.html'
      })
      .when('/7', {
        templateUrl: 'views/contents.html'
      })
      .when('/8', {
        templateUrl: 'views/html5.html'
      })
      .when('/9', {
        templateUrl: 'views/listHTML5components.html'
      })
      .when('/10', {
        templateUrl: 'views/historyAPI.html'
      })
      .when('/11', {
        templateUrl: 'views/css3.html'
      })
      .when('/12', {
        templateUrl: 'views/css3features.html'
      })
      .when('/13', {
        templateUrl: 'views/javascript.html'
      })
      .when('/14', {
        templateUrl: 'views/javascriptFeatures.html'
      })
      .when('/15', {
        templateUrl: 'views/dependencyInjection.html'
      })
      .when('/16', {
        templateUrl: 'views/angularJS.html'
      })
      .when('/17', {
        templateUrl: 'views/dataBindingDiagram.html'
      })
      .when('/18', {
        templateUrl: 'views/dataBindingExample.html'
      })
      .when('/19', {
        templateUrl: 'views/dependencyInjection.html'
      })
      .when('/20', {
        templateUrl: 'views/angularJSMVC.html'
      })
      .when('/21', {
        templateUrl: 'views/nodejs.html'
      })
      .when('/22', {
        templateUrl: 'views/nodejsfeatures.html'
      })
      .when('/23', {
        templateUrl: 'views/express.html'
      })
      .when('/24', {
        templateUrl: 'views/expressFeatures.html'
      })
      .when('/25', {
        templateUrl: 'views/mongodb.html'
      })
      .when('/26', {
        templateUrl: 'views/mongodbFeatures.html'
      })
      .when('/27', {
        templateUrl: 'views/contents.html'
      })
      .when('/28', {
        templateUrl: 'views/singlePage.html'
      })
      .when('/29', {
        templateUrl: 'views/singlePage.html'
      })
      .when('/30', {
        templateUrl: 'views/shareWhiteboard.html'
      })
      .when('/31', {
        templateUrl: 'views/webSocketIntro.html'
      })
      .when('/32', {
        templateUrl: 'views/webSocketsDiagram.html'
      })
      .when('/33', {
        templateUrl: 'views/socketio.html'
      })
      .when('/34', {
        templateUrl: 'views/socketioDiagram.html'
      })
      .when('/35', {
        templateUrl: 'views/newUserCommunication.html'
      })
      .when('/36', {
        templateUrl: 'views/joinAnotherUser.html'
      })
      .when('/37', {
        templateUrl: 'views/usersNormalCommunication.html'
      })
      .when('/38', {
        templateUrl: 'views/tools.html'
      })
      .when('/39', {
        templateUrl: 'views/yeoman.html'
      })
      .when('/40', {
        templateUrl: 'views/grunt.html'
      })
      .when('/41', {
        templateUrl: 'views/bower.html'
      })
      .when('/42', {
        templateUrl: 'views/karma.html'
      })
      .when('/43', {
        templateUrl: 'views/jasmine.html'
      })
      .when('/44', {
        templateUrl: 'views/future.html'
      })
      .when('/45', {
        templateUrl: 'views/future2.html'
      })
      .when('/46', {
        templateUrl: 'views/future2.html'
      })
      .when('/47', {
        templateUrl: 'views/thankyou.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });

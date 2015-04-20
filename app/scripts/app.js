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
        templateUrl: 'views/html5.html'
      })
      .when('/3', {
        templateUrl: 'views/html5components.html'
      })
      .when('/4', {
        templateUrl: 'views/canvas.html'
      })
      .when('/5', {
        templateUrl: 'views/dragAndDrop.html'
      })
      .when('/6', {
        templateUrl: 'views/localStorage.html'
      })
      .when('/7', {
        templateUrl: 'views/historyAPI.html'
      })
      .when('/8', {
        templateUrl: 'views/css3.html'
      })
      .when('/9', {
        templateUrl: 'views/css3features.html'
      })
      .when('/10', {
        templateUrl: 'views/javascript.html'
      })
      .when('/11', {
        templateUrl: 'views/javascriptFeatures.html'
      })
      .when('/12', {
        templateUrl: 'views/angularJS.html'
      })
      .when('/13', {
        templateUrl: 'views/dataBindingDiagram.html'
      })
      .when('/14', {
        templateUrl: 'views/dataBindingExample.html'
      })
      .when('/15', {
        templateUrl: 'views/dependencyInjection.html'
      })
      .when('/16', {
        templateUrl: 'views/angularJSMVC.html'
      })
      .when('/17', {
        templateUrl: 'views/directiveElement.html'
      })
      .when('/18', {
        templateUrl: 'views/directiveAttribute.html'
      })
      .when('/19', {
        templateUrl: 'views/angularLearningCurve.html'
      })
      .when('/20', {
        templateUrl: 'views/nodejs.html'
      })
      .when('/21', {
        templateUrl: 'views/nodejsfeatures.html'
      })
      .when('/22', {
        templateUrl: 'views/npm.html'
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
        templateUrl: 'views/mongodbDescription.html'
      })
      .when('/27', {
        templateUrl: 'views/mongodbScalable.html'
      })
      .when('/28', {
        templateUrl: 'views/mongodbFeatures.html'
      })
      .when('/29', {
        templateUrl: 'views/meanWhiteboard.html'
      })
      .when('/30', {
        templateUrl: 'views/singlePage.html'
      })
      .when('/31', {
        templateUrl: 'views/whiteboardDesign.html'
      })
      .when('/32', {
        templateUrl: 'views/uploadDesign.html'
      })
      .when('/33', {
        templateUrl: 'views/galleryDesign.html'
      })
      .when('/34', {
        templateUrl: 'views/viewControllersGroup.html'
      })
      .when('/35', {
        templateUrl: 'views/ngRouteDiagram.html'
      })
      .when('/36', {
        templateUrl: 'views/problems.html'
      })
      .when('/37', {
        templateUrl: 'views/resizeCanvas.html'
      })
      .when('/38', {
        templateUrl: 'views/shareWhiteboard.html'
      })
      .when('/39', {
        templateUrl: 'views/ajax.html'
      })
      .when('/40', {
        templateUrl: 'views/caniuseWebsocket.html'
      })
      .when('/41', {
        templateUrl: 'views/webSocketIntro.html'
      })
      .when('/42', {
        templateUrl: 'views/webSocketsDiagram.html'
      })
      .when('/43', {
        templateUrl: 'views/problems.html'
      })
      .when('/44', {
        templateUrl: 'views/problems1.html'
      })
      .when('/45', {
        templateUrl: 'views/problems2.html'
      })
      .when('/46', {
        templateUrl: 'views/socketio.html'
      })
      .when('/47', {
        templateUrl: 'views/socketioDiagram.html'
      })
      .when('/48', {
        templateUrl: 'views/newUserCommunication.html'
      })
      .when('/49', {
        templateUrl: 'views/joinAnotherUser.html'
      })
      .when('/50', {
        templateUrl: 'views/usersNormalCommunication.html'
      })
      .when('/51', {
        templateUrl: 'views/tools.html'
      })
      .when('/52', {
        templateUrl: 'views/yeoman.html'
      })
      .when('/53', {
        templateUrl: 'views/grunt.html'
      })
      .when('/54', {
        templateUrl: 'views/bower.html'
      })
      .when('/55', {
        templateUrl: 'views/karma.html'
      })
      .when('/56', {
        templateUrl: 'views/jasmine.html'
      })
      .when('/57', {
        templateUrl: 'views/progress.html'
      })
      .when('/58', {
        templateUrl: 'views/githubProgress.html'
      })
      .when('/59', {
        templateUrl: 'views/rankingGitHub.html'
      })
      .when('/60', {
        templateUrl: 'views/future.html'
      })
      .when('/61', {
        templateUrl: 'views/future2.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });

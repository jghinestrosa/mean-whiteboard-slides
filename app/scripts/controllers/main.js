'use strict';

/**
 * @ngdoc function
 * @name slidesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slidesApp
 */
angular.module('slidesApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.goToSlide = function(page) {
      $location.url("/" + page)
    };

  });

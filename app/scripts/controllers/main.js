'use strict';

/**
 * @ngdoc function
 * @name slidesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slidesApp
 */
angular.module('slidesApp')
  .controller('MainCtrl', function ($scope, $location, slideFactory) {

    $scope.currentSlide = slideFactory.getCurrentSlide();

    $scope.goToSlide = function(page) {
      $location.url("/" + page)
    };

    $scope.goToNextSlide = function() {
      slideFactory.goToNextSlide();
      $scope.goToSlide(slideFactory.getCurrentSlide());
    };

    $scope.animationClass = slideFactory.getClassName();

  });


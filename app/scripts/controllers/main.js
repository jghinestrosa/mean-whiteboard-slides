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


    $scope.goToSlide = function(page) {
      $location.url("/" + page)
    };

    $scope.goToNextSlide = function() {
      slideFactory.goToNextSlide();
      $scope.goToSlide(slideFactory.getCurrentSlide());
    };

    $scope.goToPreviousSlide = function() {
      slideFactory.goToPreviousSlide();
      $scope.goToSlide(slideFactory.getCurrentSlide());
    };

    $scope.currentSlide = slideFactory.getCurrentSlide();
    $scope.animationClass = slideFactory.getClassName();

    $scope.resizableReferent = {};


  });


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
      var changed = slideFactory.goToNextSlide();

      if (changed) {
        $scope.animationClass = 'next-slide-animation';
        $scope.goToSlide(slideFactory.getCurrentSlide());
      }
    };

    $scope.goToPreviousSlide = function() {
      var changed = slideFactory.goToPreviousSlide();

      if (changed) {
        $scope.animationClass = 'previous-slide-animation';
        $scope.goToSlide(slideFactory.getCurrentSlide());
      }
    };

    $scope.changeSlide = function(e) {
      var key = e.which;
      if (key === 37) {
        $scope.goToPreviousSlide();
      }
      else if (key === 39) {
        $scope.goToNextSlide();
      }
    };

    $scope.currentSlide = slideFactory.getCurrentSlide();

    $scope.resizableReferent = {};


  });


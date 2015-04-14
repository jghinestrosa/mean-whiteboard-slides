'use strict';

/**
 * @ngdoc service
 * @name slidesApp.slideFactory
 * @description
 * # slideFactory
 * Service in the slidesApp.
 */
angular.module('slidesApp')
  .factory('slideFactory', function () {
    var currentSlide = 1;
    var finalSlide = 4;

    return {
      getCurrentSlide: function() {
        return currentSlide;
      },
      goToNextSlide: function() {
        if (currentSlide !== finalSlide) {
          currentSlide++;
        }
      },
      goToPreviousSlide: function() {
        if (currentSlide !== 1) {
          currentSlide--;
        }
      }
    }
  });

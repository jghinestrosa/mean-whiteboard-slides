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
    var lastSlide = 9 ;

    return {
      getCurrentSlide: function() {
        return currentSlide;
      },
      getLastSlide: function() {
        return lastSlide;
      },
      goToNextSlide: function() {
        if (currentSlide !== lastSlide) {
          currentSlide++;
          return true;
        }

        return false;
      },
      goToPreviousSlide: function() {
        if (currentSlide !== 1) {
          currentSlide--;
          return true;
        }

        return false;
      }
    }
  });

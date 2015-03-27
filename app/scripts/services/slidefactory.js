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
    var slides = {
      currentSlide: 1,
      numberOfSlides: 3
    };

    return {
      getCurrentSlide: function() {
        return slides.currentSlide;
      },
      goToNextSlide: function() {
        if (slides.currentSlide !== slides.numberOfSlides) {
          slides.currentSlide++;
        }
      },
      goToPreviousSlide: function() {
        if (slides.currentSlide !== 0) {
          slides.currentSlide--;
        }
      }
    }

  });

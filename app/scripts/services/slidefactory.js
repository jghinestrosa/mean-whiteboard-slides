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
    var slidesManager = {
      slides: [
        {
          number: 1,
          animationClass: 'one'
        },
        {
          number: 2,
          animationClass: 'two'
        },
        {
          number: 3,
          animationClass: 'three'
        },
        {
          number: 4,
          animationClass: 'four'
        }
      ],
      currentSlide: 0,
      getNumberOfSlides: function() {
        return this.slides.length;
      }
    };

    return {
      getCurrentSlide: function() {
        return slidesManager.currentSlide + 1;
      },
      goToNextSlide: function() {
        if (slidesManager.currentSlide !== slidesManager.getNumberOfSlides() - 1) {
          slidesManager.currentSlide++;
        }
      },
      goToPreviousSlide: function() {
        if (slidesManager.currentSlide !== 0) {
          slidesManager.currentSlide--;
        }
      },
      getClassName: function() {
          return slidesManager.slides[slidesManager.currentSlide].animationClass;
        }
    }
  });

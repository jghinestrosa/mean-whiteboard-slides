'use strict';

/**
 * @ngdoc directive
 * @name slidesApp.directive:slide
 * @description
 * # slide
 */
angular.module('slidesApp')
  .directive('slide', ['$window', function ($window) {
    return {
      templateUrl: 'templates/slide.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function postLink(scope, element, attrs) {
        var hammertime = new Hammer(element[0]);

        hammertime.on('swipeleft', function(e) {
          scope.$apply(scope.goToNextSlide);
        });

        hammertime.on('swiperight', function(e) {
          scope.$apply(scope.goToPreviousSlide);
        });
      }
    };
  }]);

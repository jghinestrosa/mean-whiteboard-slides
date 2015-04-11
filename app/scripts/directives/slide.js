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
        element.on('click', function(e) {
          var middle = $window.innerWidth/2;
          console.log(middle, e.clientX);
          if (e.clientX >= middle) {
            scope.$apply(scope.goToNextSlide);
          }
          else {
           scope.$apply(scope.goToPreviousSlide);
          }
        });
      }
    };
  }]);

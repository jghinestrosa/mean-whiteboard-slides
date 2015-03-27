'use strict';

/**
 * @ngdoc directive
 * @name slidesApp.directive:slide
 * @description
 * # slide
 */
angular.module('slidesApp')
  .directive('slide', function () {
    return {
      templateUrl: 'templates/slide.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function postLink(scope, element, attrs) {

      }
    };
  });

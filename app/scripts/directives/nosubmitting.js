'use strict';

/**
 * @ngdoc directive
 * @name slidesApp.directive:noSubmitting
 * @description
 * # noSubmitting
 */
angular.module('slidesApp')
  .directive('noSubmitting', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.on('submit', function(e) {
          e.preventDefault();
        })
      }
    };
  });

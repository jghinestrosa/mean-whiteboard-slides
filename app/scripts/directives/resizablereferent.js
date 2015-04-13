'use strict';

/**
 * @ngdoc directive
 * @name slidesApp.directive:resizableReferent
 * @description
 * # resizableReferent
 */
angular.module('slidesApp')
  .directive('resizableReferent', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.resizableReferent.height = element[0].offsetHeight;
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name slidesApp.directive:resizable
 * @description
 * # resizable
 */
angular.module('slidesApp')
  .directive('resizable', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var originalHeight;
        var originalWidth;

        element[0].addEventListener('load', function() {
          /*originalHeight = element.css('height');
          originalWidth = element.css('width');*/
          originalHeight = element[0].offsetHeight;
          originalWidth = element[0].offsetWidth;

          $window.addEventListener('resize', resize);

          resize();
        });

        // Margin bottom in px
        var marginBottom = 70;

        // Function to resize an element
        function resize() {
          var windowHeight = $window.innerHeight;
          var referentHeight = scope.resizableReferent.height;

          // Resize proportionally
          var resizableHeight = windowHeight - referentHeight - marginBottom;
          var resizableWidth = parseInt(originalWidth*resizableHeight/originalHeight, 10);

          element.css('height', resizableHeight + 'px');
          element.css('width', resizableWidth + 'px');
        }


      }
    };
  });

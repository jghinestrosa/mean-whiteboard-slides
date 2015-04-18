'use strict';

/**
 * @ngdoc directive
 * @name slidesApp.directive:whiteboard
 * @description
 * # whiteboard
 */
angular.module('slidesApp')
  .directive('whiteboard', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        var ctx = element[0].getContext('2d');
        var prevX = 0;
        var prevY = 0;

        function draw(x, y) {
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
          prevX = x;
          prevY = y;
        }

        var hammertime = new Hammer(element[0]);

        hammertime.on('panstart', function(e) {
          var srcEvent = e.srcEvent;
          srcEvent.stopPropagation();

          prevX = e.srcEvent.clientX - e.target.offsetLeft - element[0].clientLeft;
          prevY = e.srcEvent.clientY - e.target.offsetTop - element[0].clientTop;

          hammertime.on('panmove', function(e) {
            e.srcEvent.stopPropagation();

            var x = e.srcEvent.clientX || e.srcEvent.targetTouches[0].clientX;
            var y = e.srcEvent.clientY || e.srcEvent.targetTouches[0].clientY;

            x = x - e.target.offsetLeft - element[0].clientLeft;
            y = y - e.target.offsetTop - element[0].clientTop;
            draw(x, y);
          });

        });

        hammertime.on('panend', function(e) {
          var srcEvent = e.srcEvent;
          srcEvent.stopPropagation();
          hammertime.off('panmove');
        });
      }
    };
  });

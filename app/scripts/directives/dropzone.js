'use strict';

/**
 * @ngdoc directive
 * @name slidesApp.directive:dropZone
 * @description
 * # dropZone
 */
angular.module('slidesApp')
  .directive('dropZone', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        function setDropZone(width, height, background, fnText) {
          scope.$apply(fnText);
          element.css('background', background);
          element.css('width', width);
          element.css('height', height);
        }

        function setImage(e) {
          var files = e.dataTransfer.files;

          var fileReader = new FileReader();
          fileReader.onload = function(evt) {
            scope.$apply(function() {
              var dataURL = evt.target.result;
              scope.imgDropped = dataURL;
              scope.dropped = true;

            });
          };
          fileReader.readAsDataURL(files[0]);

        }

        element.on('dragenter', function(e) {
          e.stopPropagation();
          e.preventDefault();
          scope.$apply(scope.initDropZone());
          setDropZone('63%', '63%', '#7fffd4', scope.setDraggingText);
        });

        element.on('dragover', function(e) {
          e.stopPropagation();
          e.preventDefault();
        });

        element.on('dragleave', function(e) {
          e.stopPropagation();
          e.preventDefault();
          console.log(e);

          setDropZone('65%', '65%', '#ffffff', scope.setInitialDropZoneText);
        });

        element.on('drop', function(e) {
          console.log('drop', e);
          e.stopPropagation();
          e.preventDefault();

          setDropZone('65%', '65%', '#ffffff', scope.setInitialDropZoneText);
          setImage(e);

        });
      }
    };
  });

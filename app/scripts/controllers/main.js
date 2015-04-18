'use strict';

/**
 * @ngdoc function
 * @name slidesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slidesApp
 */
angular.module('slidesApp')
  .controller('MainCtrl', function ($scope, $location, slideFactory, storageFactory) {

    $scope.goToSlide = function(page) {
      $location.url("/" + page)
    };

    $scope.goToNextSlide = function() {
      var changed = slideFactory.goToNextSlide();

      if (changed) {
        $scope.animationClass = 'next-slide-animation';
        $scope.goToSlide(slideFactory.getCurrentSlide());
        $scope.currentSlide = slideFactory.getCurrentSlide();
      }
    };

    $scope.goToPreviousSlide = function() {
      var changed = slideFactory.goToPreviousSlide();

      if (changed) {
        $scope.animationClass = 'previous-slide-animation';
        $scope.goToSlide(slideFactory.getCurrentSlide());
        $scope.currentSlide = slideFactory.getCurrentSlide();
      }
    };

    $scope.changeSlide = function(e) {
      var key = e.which;
      if (key === 37) {
        $scope.goToPreviousSlide();
      }
      else if (key === 39) {
        $scope.goToNextSlide();
      }
    };

    $scope.currentSlide = slideFactory.getCurrentSlide();
    $scope.lastSlide = slideFactory.getLastSlide();
    $scope.resizableReferent = {};

    /** Drag and drop **/
    $scope.dropZoneText = '';

    $scope.setDraggingText = function() {
      $scope.dropZoneText = 'Suelta la imagen';
    };

    $scope.setInitialDropZoneText = function() {
      $scope.dropZoneText = '¡Arrastra una imagen aquí!';
    };

    $scope.initDropZone = function() {
      $scope.dropped = false;
      $scope.imgDropped = '';
    };

    $scope.setInitialDropZoneText();
    $scope.initDropZone();

    /** LocalStorage **/
    var setSavedText = function(text) {
      if (!text || text === '') {
        $scope.storage.savedText = 'Escribe algo para la posteridad';
      }
      else {
        $scope.storage.savedText = text;
      }
    };

    $scope.storage = {
      savedText: ''
    };

    $scope.saveText = function() {
      storageFactory.save($scope.storage.savedText);
    };

    $scope.loadText = function() {
      var text = storageFactory.load();
      setSavedText(text);
    };

    $scope.loadText();

    /** Data binding example **/
    $scope.dataBinding = {
      name: 'Jorge García Hinestrosa',
      thisIs: 'mi presentación del proyecto fin de carrera',
      twitter: '@jghinestrosa'
    }

  });


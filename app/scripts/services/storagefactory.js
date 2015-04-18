'use strict';

/**
 * @ngdoc service
 * @name slidesApp.storage
 * @description
 * # storage
 * Service in the slidesApp.
 */
angular.module('slidesApp')
  .factory('storageFactory', function ($window) {
    var localStorage = $window.localStorage;

    return {
      save: function(text) {
        localStorage.setItem('mean-slides', text);
      },
      load: function() {
        return localStorage.getItem('mean-slides');
      }
    };
  });

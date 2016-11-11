'use strict';

/**
 * @ngdoc function
 * @name starter.service:LoginService
 * @description
 * # LoginService
 * Service of Login
 */
 angular.module('starter').factory('Camera', function($q) {

   return {
      getPicture: function(options) {
         var q = $q.defer();

         navigator.camera.getPicture(function(result) {
            q.resolve(result);
         }, function(err) {
            q.reject(err);
         }, options);

         return q.promise;
      }
   }

});

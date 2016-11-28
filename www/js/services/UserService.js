'use strict';

/**
 * @ngdoc function
 * @name starter.service:LoginService
 * @description
 * # LoginService
 * Service of Login
 */
 angular.module('starter').factory('UserService', getLoginDataFromAPI);

 getLoginDataFromAPI.$inject = ['$http', 'CONSTANTS', '$httpParamSerializerJQLike'];

 function getLoginDataFromAPI($http, CONSTANTS) {

     $http.defaults.useXDomain = true;


     var service = {
        //get - Profile
        getProfile: function (userId, AuthorizationTokenObject) {
            var getUserLoginInformationUrl = CONSTANTS.APP_API_URL + '/api/Account/GetProfile?UserId=' + userId;

            return $http({
              method: 'GET',
              url: getUserLoginInformationUrl,
              useXDomain: true,
              headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
            }).success(function(data, status) {
              return data;
            });
          },
        //get - Profile
        updateProfile: function (userId, AuthorizationTokenObject) {
            var getUserLoginInformationUrl = CONSTANTS.APP_API_URL + '/api/Account/Update';

            return $http({
              method: 'POST',
              url: getUserLoginInformationUrl,
              useXDomain: true,
              headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
            }).success(function(data, status) {
              return data;
            });
          },
     };

     return service;
 }

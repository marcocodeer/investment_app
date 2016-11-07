'use strict';

/**
 * @ngdoc function
 * @name starter.service:LoginService
 * @description
 * # LoginService
 * Service of Login
 */
 angular.module('starter').factory('LoginService', getLoginDataFromAPI);

 getLoginDataFromAPI.$inject = ['$http', 'CONSTANTS', '$httpParamSerializerJQLike'];

 function getLoginDataFromAPI($http, CONSTANTS, $httpParamSerializerJQLike) {

     $http.defaults.useXDomain = 'true';

     var service = {
       //post - Token
        postToken: function (object) {
            var getTokenApiUrl = CONSTANTS.APP_API_URL + '/token';

            return $http({
                method: 'POST',
                url: getTokenApiUrl,
                useXDomain: true,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(object)
            }).success(function(data, status) {
                return data;
            });
        },
        //post - Login
        postUserLoginInformation: function (object, AuthorizationTokenObject) {
            var getUserLoginInformationUrl = CONSTANTS.APP_API_URL + '/api/Account/Login';

            return $http({
                method: 'POST',
                url: getUserLoginInformationUrl,
                //useXDomain: true,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token},
                data: $httpParamSerializerJQLike(object)
            }).success(function(data, status) {
                return data;
            });
        },
        //post - Reset Password
        postResetPassword: function (object, AuthorizationTokenObject) {
            var getUserLoginInformationUrl = CONSTANTS.APP_API_URL + '/api/Account/RequestResetPassword?email=' + object;

            return $http({
                method: 'POST',
                url: getUserLoginInformationUrl,
                //useXDomain: true,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token},
                data: $httpParamSerializerJQLike(object)
            }).success(function(data, status) {
                return data;
            });
        },
        //post - Create accout
        postNewUser: function (object, AuthorizationTokenObject) {
            var getUserLoginInformationUrl = CONSTANTS.APP_API_URL + '/api/Account/NewUser';

            return $http({
                method: 'POST',
                url: getUserLoginInformationUrl,
                //useXDomain: true,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token},
                data: $httpParamSerializerJQLike(object)
            }).success(function(data, status) {
                return data;
            });
        },

     };

     return service;
 }

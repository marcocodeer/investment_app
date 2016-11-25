'use strict';

/**
 * @ngdoc function
 * @name starter.service:TransactionsService
 * @description
 * # TransactionsService
 * Service of Transactions
 */
 angular.module('starter').factory('BankService', getBankDataFromAPI);

getBankDataFromAPI.$inject = ['$http', 'CONSTANTS', '$httpParamSerializerJQLike'];


 function getBankDataFromAPI($http, CONSTANTS, $httpParamSerializerJQLike) {

     $http.defaults.useXDomain = true;

     var service = {

        getAllBanks: function (AuthorizationTokenObject) {
            var getDoBankApiUrl = CONSTANTS.APP_API_URL + '/api/Bank/GetAllBanks';

            return $http({
                method: 'GET',
                url: getDoBankApiUrl,
                useXDomain: true,
                headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
            }).success(function(data, status) {
                return data;
            });
        },
       getAllUserBanks: function (userId, AuthorizationTokenObject) {
         var getTransactionsApiUrl = CONSTANTS.APP_API_URL + '/api/Bank/GetUserBanksAccounts?UserId=' + userId;

         return $http({
           method: 'GET',
           url: getTransactionsApiUrl,
           useXDomain: true,
           headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
         }).success(function(data, status) {
           return data;
         });
       },
       getAllUserSingleBanks: function (userId, AuthorizationTokenObject) {
         var getTransactionsApiUrl = CONSTANTS.APP_API_URL + '/api/Bank/GetUserSingleBankAccount?BankAccountId=' + userId;

         return $http({
           method: 'GET',
           url: getTransactionsApiUrl,
           useXDomain: true,
           headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
         }).success(function(data, status) {
           return data;
         });
       },
       addUserBank: function (obj, AuthorizationTokenObject) {
         var getTransactionsApiUrl = CONSTANTS.APP_API_URL + '/api/Bank/AddOrUpdateUserBankAccount';

         return $http({
           method: 'POST',
           url: getTransactionsApiUrl,
           useXDomain: true,
           data: $httpParamSerializerJQLike(obj),
           headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
         }).success(function(data, status) {
           return data;
         });
       },

     };

     return service;
 }

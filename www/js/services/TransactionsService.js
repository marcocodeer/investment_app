'use strict';

/**
 * @ngdoc function
 * @name starter.service:TransactionsService
 * @description
 * # TransactionsService
 * Service of Transactions
 */
 angular.module('starter').factory('TransactionsService', getTransactionDataFromAPI);

getTransactionDataFromAPI.$inject = ['$http', 'CONSTANTS', '$httpParamSerializerJQLike'];


 function getTransactionDataFromAPI($http, CONSTANTS, $httpParamSerializerJQLike) {

     $http.defaults.useXDomain = true;

     var service = {

        DoInvestment: function (investmentId, AuthorizationTokenObject) {
            var getDoInvestmentApiUrl = CONSTANTS.APP_API_URL + 'api/Transactions/DoInvestment?UserFinancialTransactionId=' + investmentId;

            return $http({
                method: 'POST',
                url: getDoInvestmentApiUrl,
                useXDomain: true,
                headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
            }).success(function(data, status) {
                return data;
            });
        },
       GetAllTransactionsByUserId: function (userId, AuthorizationTokenObject) {
         var getTransactionsApiUrl = CONSTANTS.APP_API_URL + '/api/Transactions/GetAllTransactionsByUserId?UserId=' + userId;

         return $http({
           method: 'GET',
           url: getTransactionsApiUrl,
           useXDomain: true,
           headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
         }).success(function(data, status) {
           return data;
         });
       },
       GetAllTransactionsByUserIdByMonth: function (userId, month, AuthorizationTokenObject) {
         var GetAllTransactionsByUserIdByMonthApiUrl = CONSTANTS.APP_API_URL + '/api/Transactions/GetAllTransactionsByUserIdByMonth?UserId=' + userId + '&Month=' + month;

         return $http({
           method: 'GET',
           url: GetAllTransactionsByUserIdByMonthApiUrl,
           useXDomain: true,
           headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
         }).success(function(data, status) {
           return data;
         });
       },
       GetAllNotInvestedByUserId: function (userId, AuthorizationTokenObject) {
         var GetAllNotInvestedByUserIdApiUrl = CONSTANTS.APP_API_URL + '/api/Transactions/GetAllNotInvestedByUserId?UserId=' + userId;

         return $http({
           method: 'GET',
           url: GetAllNotInvestedByUserIdApiUrl,
           useXDomain: true,
           headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
         }).success(function(data, status) {
           return data;
         });
       },
       GetAllInvestedByUserId: function (userId, AuthorizationTokenObject) {
         var GetAllInvestedByUserIdApiUrl = CONSTANTS.APP_API_URL + '/api/Transactions/GetAllInvestedByUserId?UserId=' + userId;

         return $http({
           method: 'GET',
           url: GetAllInvestedByUserIdApiUrl,
           useXDomain: true,
           headers: {'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': AuthorizationTokenObject.authorization_token}
         }).success(function(data, status) {
           return data;
         });
       }

     };

     return service;
 }

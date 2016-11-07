angular.module('starter').controller('novoUsuarioPerguntasCtrl', function($scope, $ionicModal, $timeout, $state, CONSTANTS, LoginService, LocalStorage) {

  //$scope.$root.user.app.estado = $state.current.name;
  console.log("Você está dentro novoUsuarioPerguntasCtrl.");

  //Variaveis para criação do usuario.
  $scope.newAccount = {};
  $scope.newAccount.planId = '';
  $scope.newAccount.fullName = '';
  $scope.newAccount.email = '';
  $scope.newAccount.password = '';
  $scope.newAccount.dob = '';
  $scope.newAccount.cpf = '';
  $scope.newAccount.rg = '';
  $scope.newAccount.gender = '';
  $scope.newAccount.avatar = '';
  $scope.newAccount.address = '';
  $scope.newAccount.city = '';
  $scope.newAccount.state = '';
  $scope.newAccount.zipCode = '';
  $scope.newAccount.countryId = '';
  $scope.newAccount.cpf = '';
  $scope.newAccount.phone1 = '';
  $scope.newAccount.phone2 = '';
  $scope.newAccount.cellphone = '';
  $scope.newAccount.status = '';
  $scope.newAccount.userType = '';
  $scope.newAccount.acceptedContract = true;
  $scope.newAccount.smsNotification = true;
  $scope.newAccount.emailNotification = true;
  $scope.newAccount.securityQuestion = '';
  $scope.newAccount.securityAnswer = '';
  $scope.newAccount.investorProfile = '';
  $scope.newAccount.rememberToken = true;



});

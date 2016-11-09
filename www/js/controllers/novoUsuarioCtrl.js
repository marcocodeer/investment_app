angular.module('starter').controller('novoUsuarioPerguntasCtrl', function($scope, $ionicModal, $timeout, $state, CONSTANTS, LoginService, LocalStorage, $rootScope, UserRegistrationServiceStore) {

  //$scope.$root.user.app.estado = $state.current.name;
  console.log("Você está dentro novoUsuarioPerguntasCtrl.");

  $scope.go = function (destino){

    $state.go(destino);

  };

  //Variaveis para criação do usuario.
  $scope.newAccount = {};
  $scope.newAccount.planId = '';
  $scope.newAccount.fullName = '';
  $scope.newAccount.email = '';
  $scope.newAccount.password = '';
  $scope.newAccount.dob = '';
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

  $scope.do2 = function () {
    try {
        //Validations

        //Retrieve and Store New Account Object
        var newAccountStored = UserRegistrationServiceStore.getNewUser();
        newAccountStored.email = $scope.newAccount.email;
        newAccountStored.fullName = $scope.newAccount.fullName;
        newAccountStored.password = $scope.newAccount.password;
        newAccountStored.phone1 = $scope.newAccount.phone1;
        newAccountStored.cpf = $scope.newAccount.cpf;
        UserRegistrationServiceStore.setNewUser(newAccountStored);

        //Redirect to the next page..
        $state.go('pergunta-2');

    } catch (e) {
      console.log(e);
    }
  };
  $scope.do3 = function () {
    try {
        //Validations

        //Retrieve and Store New Account Object
        var newAccountStored = UserRegistrationServiceStore.getNewUser();
        newAccountStored.zipCode = $scope.newAccount.zipCode;
        newAccountStored.city = $scope.newAccount.city;
        newAccountStored.address = $scope.newAccount.address;
        UserRegistrationServiceStore.setNewUser(newAccountStored);
        console.log(UserRegistrationServiceStore);

        //Redirect to the next page..
        $state.go('pergunta-3');

    } catch (e) {
      console.log(e);
    }
  };
  $scope.do4 = function () {
    try {
        //Validations

        //Retrieve and Store New Account Object
        var newAccountStored = UserRegistrationServiceStore.getNewUser();
        newAccountStored.password = $scope.newAccount.password;
        newAccountStored.securityQuestion = $scope.newAccount.securityQuestion;
        newAccountStored.securityAnswer = $scope.newAccount.securityAnswer;
        UserRegistrationServiceStore.setNewUser(newAccountStored);
        console.log(newAccountStored);

        //Redirect to the next page..
        $state.go('pergunta-4');

    } catch (e) {
      console.log(e);
    }
  };
  $scope.do5 = function () {
    try {
        //Validations

        //Retrieve and Store New Account Object
        var newAccountStored = UserRegistrationServiceStore.getNewUser();
        newAccountStored.investorProfile = '';
        UserRegistrationServiceStore.setNewUser(newAccountStored);
        console.log(newAccountStored);

        var tokenObject = '';

        //Get Token
        if(LocalStorage.get('AuthorizationToken') != null) {
          tokenObject = LocalStorage.get('AuthorizationToken');
        }


        var userRegistrationRequest = LoginService.postNewUser(newAccountStored, tokenObject);
          userRegistrationRequest.then(function(result){
            console.log("result");
            console.log(result);
          });
        console.log(userRegistrationRequest);

        //Redirect to the login page..

    } catch (e) {
      console.log(e);
    }
  };



});

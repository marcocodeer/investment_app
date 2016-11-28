angular.module('starter').controller('novoUsuarioPerguntasCtrl', function($scope, $ionicModal, $timeout, $state, CONSTANTS, LoginService, LocalStorage, $rootScope, UserRegistrationServiceStore, $ionicPopover, $ionicPopup) {

  //$scope.$root.user.app.estado = $state.current.name;
  console.log("Você está dentro novoUsuarioPerguntasCtrl.");

  $scope.go = function (destino){

    $state.go(destino);

  };

  $ionicPopover.fromTemplateUrl('templates/popover.html', {

    scope: $scope

  }).then(function(popover) {

    $scope.popover = popover;

  });

  $scope.mudaUF = function(uf){

    $scope.newAccount.state = uf;

    $scope.popover.hide();

  };


  $scope.openPopover = function($event,tipo, pergunta) {

    if(tipo === 1){

      $scope.$root.user.app.notificacao = true;

    }
    $scope.perguntaPopover = pergunta;

    $scope.popover.show($event);

  };

  $scope.$on('popover.hidden', function() {

  //  $scope.$root.user.app.notificacao = false;

  });

  // A confirm dialog to redirect user after created.
  // An elaborate, custom popup

$scope.showConfirm = function() {
  var myPopup = $ionicPopup.show({
    template: 'Seu cadastro foi realizado com sucesso, volte para a página de login para acessar sua conta!',
    title: 'Cadastro',
    scope: $scope,
    buttons: [
      { text: '<b>Sair</b>',
      type: 'button-default',
      onTap: function(e) {
        $state.go('login');
        }
      },
      {
        text: '<b>Login</b>',
        type: 'button-positive',
        onTap: function(e) {
          $state.go('login');
        }
      }
    ]
  });
};
$scope.errorPopup = function() {
  var myPopup = $ionicPopup.show({
    template: 'Um erro aconteceu, o e-mail digitado já existe em nossa base de dados.',
    title: 'Ops',
    scope: $scope,
    buttons: [
      { text: '<b>Sair</b>',
      type: 'button-default',
      onTap: function(e) {
        $state.go('login');
        }
      },
      {
        text: '<b>Voltar</b>',
        type: 'button-positive',
        onTap: function(e) {
          $state.go('pergunta-1');
        }
      }
    ]
  });
};

 $scope.estadoPage = $state.current.name;
 console.log($scope.estadoPage);
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
  $scope.newAccount.investmentBalance = 0;

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
        newAccountStored.dob = $scope.newAccount.dob;
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
        newAccountStored.state = $scope.newAccount.state;
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

        //Retrieve and Store New Account Object
        var newAccountStored = UserRegistrationServiceStore.getNewUser();
        newAccountStored.investorProfile = $scope.newAccount.investorProfile;
        UserRegistrationServiceStore.setNewUser(newAccountStored);
        console.log(newAccountStored);

        //Validations
        var tokenObject = {
            'username': CONSTANTS.APP_USERNAME,
            'password': CONSTANTS.APP_PASSWORD,
            'grant_type': 'password'
        };

        var getToken = LoginService.postToken(tokenObject);
          getToken.then(function(result){
            if(result.statusText == 'OK'){

              //Store the API Access Token
              var AuthorizationTokenObject = {
                  'authorization_token': 'Bearer ' + result.data.access_token
                  //'authorization_token_expires_time': result.data.expires_in,
                  //'authorization_token_type': result.data.token_type
              };
              console.log("Token API");
              console.log(AuthorizationTokenObject);

              if(LocalStorage.get('AuthorizationToken') != null) {
                  LocalStorage.update('AuthorizationToken', AuthorizationTokenObject);
              }else {
                  LocalStorage.set('AuthorizationToken', AuthorizationTokenObject);
              }
              console.log("Novo usuario JSON");
              console.log(JSON.stringify(newAccountStored));
              var userRegistrationRequest = LoginService.postNewUser(newAccountStored, AuthorizationTokenObject);
                userRegistrationRequest.then(function(result){
                  if(result.data.statusapp == 'OK'){
                    //$scope.showConfirm();
                    $state.go('bem-vindo');
                  }
                  else {
                    $scope.errorPopup();
                  }
                });
              console.log(userRegistrationRequest);
            }else{
              console.log("error cadastrando");
            }
          });



        //Redirect to the login page..

    } catch (e) {
      console.log(e);
    }
  };



});

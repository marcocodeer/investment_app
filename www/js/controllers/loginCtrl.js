angular.module('starter').controller('loginCtrl', function($scope, $ionicModal, $timeout, $state, CONSTANTS, LoginService, LocalStorage, $ionicPopup, $ionicLoading) {

  //$scope.$root.user.app.estado = $state.current.name;
  console.log("Você está dentro de login page.");

  $scope.username = 'drikows@drikows.com';
  $scope.password = '123';
  $scope.rememberMe = '';
  $scope.email = '';

  $scope.showPopLogin = function() {

    var alertPopup = $ionicPopup.alert({
      title: 'Desculpe!',
      template: 'Usuario ou senha estão inválidos.'
    });

    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };


  $scope.deslogado = false;

  $scope.resetPassword = function (email){
    try {
      var resetObject = {
        'email': email,
      };
      console.log("Email para solicitacao de senha.");
      console.log(resetObject);

      var tokenObject = '';

      //Get Token
      if(LocalStorage.get('AuthorizationToken') != null) {
        tokenObject = LocalStorage.get('AuthorizationToken');
      }


      var postReset = LoginService.postResetPassword(email, tokenObject);
        postReset.then(function(result){
          console.log("Resultado post senha");
          console.log(result);
          if(result.data.statusapp == 'OK'){
            $state.go('sucesso-senha');
          }else {
            var myPopup = $ionicPopup.show({
              template: 'Email não encontrado, volte e tente denovo!',
              title: 'Ops',
              scope: $scope,
              buttons: [
                { text: '<b>Ok</b>',
                type: 'button-positive',
                onTap: function(e) {
                  $state.go('resetar-senha');
                  }
                }
              ]
            });
          }

        });

    } catch (e) {
      console.log(e);
    }
  };

  $scope.doLogin = function (email, pass) {

    try {

      $ionicLoading.show({
        template: '<img src="img/seguranca-slide-pic2.png" alt="" style="width: 100%;margin-top: 53px;margin-bottom: 19px;"><div class="custom-spinner-container">'+
        '<ion-spinner name="circles"></ion-spinner><span style="margin-top: -29px;display: block;margin-bottom: 5px;">Entrando...</span> '+
        '</div>',
        duration: 3000
      }).then(function(){

      });

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


            //Create Object
            var userInfoObject = {
                'email': email,
                'password': pass,
                'rememberMe': true
            };

            console.log("User detail");
            console.log(userInfoObject);

            var userLoginInformation = LoginService.postUserLoginInformation(userInfoObject, AuthorizationTokenObject);
            console.log(userLoginInformation);
              userLoginInformation.then(function(result){
                if(result.data.statusapp == 'OK'){
                  $scope.logado = result.data.data;
                  $scope.deslogado = false;
                  $state.go('app.home');

                  LocalStorage.remove('UserProfile');
                  LocalStorage.set('UserProfile', result.data.data);

                  $ionicLoading.hide();

                }else if (result.data.statusapp == 'NOK'){
                  $scope.naoLogado = "Usuário ou Senha inválidos.";
                  $scope.showPopLogin();
                  $scope.deslogado = true;
                }
              });

          }else{
            console.log("error in login");
          }
        });


    } catch (e) {
        console.log(e);
    }
  };

  $scope.resetPass = function(){
      $state.go('resetar-senha');
    };
    $scope.SendSucessPass = function(){
      $state.go('sucesso-senha');
    };
    $scope.login = function(){
      $state.go('login');
    };
});

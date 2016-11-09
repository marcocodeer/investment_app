angular.module('starter').controller('loginCtrl', function($scope, $ionicModal, $timeout, $state, CONSTANTS, LoginService, LocalStorage) {

  //$scope.$root.user.app.estado = $state.current.name;
  console.log("Você está dentro de login page.");

  $scope.username = '';
  $scope.password = '';
  $scope.rememberMe = '';
  $scope.email = '';

  

  $scope.deslogado = false;

  $scope.resetPassword = function (){
    try {
      var resetObject = {
        'email': "guest@codeer.com.br",
      };
      console.log("Email para solicitacao de senha.");
      console.log(resetObject);

      var tokenObject = '';

      //Get Token
      if(LocalStorage.get('AuthorizationToken') != null) {
        tokenObject = LocalStorage.get('AuthorizationToken');
      }


      var postReset = LoginService.postResetPassword(resetObject, tokenObject);
        postReset.then(function(result){
            $state.go('sucesso-senha');
            console.log("Senha alterada");
            console.log(result);
        });
      console.log(postReset);
    } catch (e) {
      console.log(e);
    }
  };

  $scope.doLogin = function (email, pass) {
    try {

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

                }else if (result.data.statusapp == 'NOK'){
                  $scope.naoLogado = "Usuário ou Senha inválidos.";
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

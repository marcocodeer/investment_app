angular.module('starter').controller('loginCtrl', function($scope, $ionicModal, $timeout, $state, CONSTANTS, LoginService, LocalStorage) {

  //$scope.$root.user.app.estado = $state.current.name;
  console.log("Você está dentro de login page.");

  $scope.username = '';
  $scope.password = '';
  $scope.rememberMe = '';
  $scope.email = '';

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
            console.log('doLogin');
            console.log(result);

            //Store the API Access Token
            var AuthorizationTokenObject = {
                'authorization_token': 'Bearer' + result.data.access_token
                //'authorization_token_expires_time': result.data.expires_in,
                //'authorization_token_type': result.data.token_type
            };

            if(LocalStorage.get('AuthorizationToken') != null) {
                LocalStorage.update('AuthorizationToken', AuthorizationTokenObject);
            }else {
                LocalStorage.set('AuthorizationToken', AuthorizationTokenObject);
            }


            //Create Object
            var userInformationParametersObject = {
                'email': email,
                'password': pass,
                'rememberMe': true
            };

            console.log("User detail");
            console.log(userInformationParametersObject);

            var userLoginInformation = LoginService.postUserLoginInformation(userInformationParametersObject, AuthorizationTokenObject);
              userLoginInformation.then(function(result){
                console.log(result);
                  console.log("Logado.");
              });


          }else{

          }
        });
      console.log("getToken");
      console.log(getToken);

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

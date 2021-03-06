angular.module('starter.controllers', [])

  .controller('AppCtrl', function($stateParams, $scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover, $cordovaCamera, LocalStorage, BankService, $ionicPopup, $ionicLoading) {
    try {

      $scope.userInfo = LocalStorage.get('UserProfile');

      var tokenObject = '';

      //Get Token
      if(LocalStorage.get('AuthorizationToken') != null) {

        tokenObject = LocalStorage.get('AuthorizationToken');

      }

      $scope.takeImage = function() {
              var options = {
                  quality: 80,
                  destinationType: Camera.DestinationType.DATA_URL,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: true,
                  encodingType: Camera.EncodingType.JPEG,
                  targetWidth: 250,
                  targetHeight: 250,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false
              };

              $cordovaCamera.getPicture(options).then(function(imageData) {
                  $scope.srcImage = "data:image/jpeg;base64," + imageData;
              }, function(err) {
                  // error
              });
          }

      $scope.slideHasChanged = function($index){

        if($index === 6){

          var myClasses = document.querySelectorAll('.slider-pager'),i = 0,l = myClasses.length;

          for (i; i < l; i++) {

            myClasses[i].style.display = 'none';

          }

          document.getElementById('footer-apresentacao').style.display = 'none';

        } else {

          var myClasses = document.querySelectorAll('.slider-pager'),i = 0,l = myClasses.length;

          for (i; i < l; i++) {

            myClasses[i].style.display = 'block';

          }

        }

      };

      $ionicPopover.fromTemplateUrl('templates/popover.html', {

        scope: $scope

      }).then(function(popover) {

        $scope.popover = popover;

      });

      $scope.Tour = '';

      var user = LocalStorage.get('UserProfile');

      console.log(user);

      $scope.$root.user = {
        pessoal : {
          userId :      user.userId,
          nome :        user.fullName,
          fone :        user.phone1,
          email :       user.email,
          dob :         user.dob,
          cpf :         user.cpf,
          sexo :        user.gender
        },
        endereco : {
          rua :         user.address,
          cidade :      user.city,
          cep :         user.zipCode,
          uf :          user.state,
          complemento : user.gender
        },
        financeiro : {
          emprego : 'Estudante',
          bens : 'Menos de R$10 mil',
          tempo : 'Menos de 5 anos',
          motivo : 'Geral',
          ano : 'Menos de R$25 mil'
        },
        app : {
          estado : $state.current.name,
          notificacao : false,
          notificacoes : [
            {
              id : 0,
              text : 'Há um problema com a verificação da sua conta.',
              link : 'app.dados-usuario',
              label : 'CORRIGIR',
              readed : false
            },
            {
              id : 1,
              text : 'O login com o seu banco não teve sucesso.',
              link : 'app.conta-bancaria',
              label : 'TENTAR NOVAMENTE',
              readed : false
            }
          ],
          saldo : user.investmentBalance,
          ciclo : '',
          uf : 'UF',
          bandeiras : 'Bandeiras',
          banco : 'Banco',
          cartoes : [
            {
              id : 0,
              name : 'Visa',
              number : '4455-5547-9968-2124'
            },
            {
              id : 1,
              name : 'Master',
              number : '4455-5547-9968-2124'
            },
            {
              id : 2,
              name : 'PayPal',
              number : '4455-5547-9968-2124'
            },
            {
              id : 3,
              name : 'Dinners',
              number : '4455-5547-9968-2124'
            }
          ],
          investimentos : [
            {
              id : 0,
              type : 1,
              value : '10,00',
              day :  new Date("October 13, 2016 11:13:00"),
              total : '150,00'
            },
            {
              id : 1,
              type : 2,
              value : '20,00',
              day :  new Date("October 20, 2016 11:13:00"),
              total : '60,00'
            },
            {
              id : 2,
              type : 3,
              value : '10,00',
              day :  new Date("November 13, 2016 11:13:00"),
              total : '0,00'
            }
          ],
          perfil : 1,
          perfis : [
            {
              'nome' : 'Conservador',
              'nivel' : 1,
              'desc' : 'Para investidores com capital de investimento',
              'select' : false,
              'acoes' :  [
                {
                  'label': 'Ações de Grandes Companhias',
                  'cor': '#73FF73',
                  'value': 16
                },
                {
                  'label': 'Ações de Pequenas Companhias',
                  'cor': '#A3D900',
                  'value': 19
                },
                {
                  'label': 'Ações de Mercado Emergente',
                  'cor': '#B973FF',
                  'value': 10
                },
                {
                  'label': 'Ações de Mercado Imobiliário',
                  'cor': '#26C9FF',
                  'value': 16
                },
                {
                  'label': 'Dívidas Corporativas',
                  'cor': '#FFBF00',
                  'value': 33
                },
                {
                  'label': 'Dívidas Públicas',
                  'cor': '#FF5C26',
                  'value': 6
                }
              ]

            },
            {
              'nome' : 'Conservador/Moderado',
              'nivel' : 2,
              'desc' : 'Para investidores com capital de investimento',
              'select' : false,
              'acoes' :  [
                {
                  'label': 'Ações de Grandes Companhias',
                  'cor': '#73FF73',
                  'value': 14
                },
                {
                  'label': 'Ações de Pequenas Companhias',
                  'cor': '#A3D900',
                  'value': 15
                },
                {
                  'label': 'Ações de Mercado Emergente',
                  'cor': '#B973FF',
                  'value': 8
                },
                {
                  'label': 'Ações de Mercado Imobiliário',
                  'cor': '#26C9FF',
                  'value': 14
                },
                {
                  'label': 'Dívidas Corporativas',
                  'cor': '#FFBF00',
                  'value': 23
                },
                {
                  'label': 'Dívidas Públicas',
                  'cor': '#FF5C26',
                  'value': 26
                }
              ]

            },
            {
              'nome' : 'Moderado',
              'nivel' : 3,
              'desc' : 'Para investidores com capital de investimento',
              'select' : false,
              'acoes' :  [
                {
                  'label': 'Ações de Grandes Companhias',
                  'cor': '#73FF73',
                  'value': 16
                },
                {
                  'label': 'Ações de Pequenas Companhias',
                  'cor': '#A3D900',
                  'value': 19
                },
                {
                  'label': 'Ações de Mercado Emergente',
                  'cor': '#B973FF',
                  'value': 10
                },
                {
                  'label': 'Ações de Mercado Imobiliário',
                  'cor': '#26C9FF',
                  'value': 16
                },
                {
                  'label': 'Dívidas Corporativas',
                  'cor': '#FFBF00',
                  'value': 20
                },
                {
                  'label': 'Dívidas Públicas',
                  'cor': '#FF5C26',
                  'value': 19
                }
              ]

            },
            {
              'nome' : 'Moderado/Agressivo',
              'nivel' : 4,
              'desc' : 'Para investidores com capital de investimento',
              'select' : false,
              'acoes' :  [
                {
                  'label': 'Ações de Grandes Companhias',
                  'cor': '#73FF73',
                  'value': 13
                },
                {
                  'label': 'Ações de Pequenas Companhias',
                  'cor': '#A3D900',
                  'value': 25
                },
                {
                  'label': 'Ações de Mercado Emergente',
                  'cor': '#B973FF',
                  'value': 14
                },
                {
                  'label': 'Ações de Mercado Imobiliário',
                  'cor': '#26C9FF',
                  'value': 22
                },
                {
                  'label': 'Dívidas Corporativas',
                  'cor': '#FFBF00',
                  'value': 13
                },
                {
                  'label': 'Dívidas Públicas',
                  'cor': '#FF5C26',
                  'value': 13
                }
              ]

            },
            {
              'nome' : 'Agressivo',
              'nivel' : 5,
              'desc' : 'Para investidores com capital de investimento',
              'select' : false,
              'acoes' :  [
                {
                  'label': 'Ações de Grandes Companhias',
                  'cor': '#73FF73',
                  'value': 14
                },
                {
                  'label': 'Ações de Pequenas Companhias',
                  'cor': '#A3D900',
                  'value': 25
                },
                {
                  'label': 'Ações de Mercado Emergente',
                  'cor': '#B973FF',
                  'value': 20
                },
                {
                  'label': 'Ações de Mercado Imobiliário',
                  'cor': '#26C9FF',
                  'value': 30
                },
                {
                  'label': 'Dívidas Corporativas',
                  'cor': '#FFBF00',
                  'value': 6
                },
                {
                  'label': 'Dívidas Públicas',
                  'cor': '#FF5C26',
                  'value': 5
                }
              ]

            },
            {
              'nome' : 'Investir em StartUps',
              'nivel' : 6,
              'desc' : 'StartUps High Tech',
              'select' : false,
              'acoes' :  [
                {
                  'label': 'Ações de Grandes Companhias',
                  'cor': '#73FF73',
                  'value': 16
                },
                {
                  'label': 'Ações de Pequenas Companhias',
                  'cor': '#A3D900',
                  'value': 19
                },
                {
                  'label': 'Ações de Mercado Emergente',
                  'cor': '#B973FF',
                  'value': 10
                },
                {
                  'label': 'Ações de Mercado Imobiliário',
                  'cor': '#26C9FF',
                  'value': 16
                },
                {
                  'label': 'Dívidas Corporativas',
                  'cor': '#FFBF00',
                  'value': 33
                },
                {
                  'label': 'Dívidas Públicas',
                  'cor': '#FF5C26',
                  'value': 6
                }
              ]

            }
          ]
        }

      };


      $scope.openPopover = function($event,tipo, pergunta) {

        if(tipo === 1){

          $scope.$root.user.app.notificacao = true;

        }
        $scope.perguntaPopover = pergunta;

        $scope.popover.show($event);

      };

      $scope.$on('popover.hidden', function() {

        $scope.$root.user.app.notificacao = false;

      });

      $scope.goNotification = function (destino){

        $state.go(destino);

        $scope.popover.hide();

        $scope.$root.user.app.notificacao = false;

      };

      $scope.mudaUF = function(uf){

        $scope.$root.user.app.uf = uf;
        $scope.$root.user.financeiro.emprego = uf;
        $scope.userInfo.state = uf;
        console.log($scope.userInfo.state);

        $scope.popover.hide();

      };

      $scope.mudaEmprego = function(emprego){

        $scope.$root.user.financeiro.emprego = emprego;

        $scope.popover.hide();

      };
      $scope.mudaBens = function(bens){

        $scope.$root.user.financeiro.bens = bens;

        $scope.popover.hide();

      };
      $scope.mudaTempo = function(tempo){

        $scope.$root.user.financeiro.tempo = tempo;

        $scope.popover.hide();

      };
      $scope.mudaInvestir = function(invest){

        $scope.$root.user.financeiro.motivo = invest;

        $scope.popover.hide();

      };
      $scope.mudaSaldo = function(saldo){

        $scope.$root.user.financeiro.ano = saldo;

        $scope.popover.hide();

      };

      $scope.mudaBandeira = function(bandeira){

        $scope.$root.user.app.bandeiras = bandeira;

        $scope.popover.hide();

      };

      $scope.mudaConta = function(conta){

        $scope.$root.user.app.banco = conta;

        $scope.popover.hide();

      };

      // Form data for the login modal
      $scope.loginData = {};

      console.log("Você está em App Ctrl");

      // Create the login modal that we will use later

      $ionicModal.fromTemplateUrl('templates/login/login.html', {

        scope: $scope

      }).then(function(modal) {

        $scope.modal = modal;

      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
      };
      $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
      };

      $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };

      $scope.doArredondamento = function (){

        $state.go('app.arredondamentos');
      };
      $scope.doPerfis = function (){

        $state.go('app.perfil');
      };
      $scope.doProgramados = function (){

        $state.go('app.investimento-programado');
      };
      $scope.adicionarConta = function (){

        $state.go('app.adicionar-conta');
      };
      $scope.adicionarPreferencia = function (){

        $state.go('app.preferencias');
      };
      $scope.adicionarContaBancaria = function (){

        $state.go('app.conta-bancaria');
      };
      $scope.adicionarNotificacoes = function (){
        $state.go('app.notificacoes');

      };
      $scope.adicionarDadosUsuario = function (){

        $state.go('app.dados-usuario');
      };
      $scope.segurancaConfig = function (){

        $state.go('app.seguranca');
      };


      // Open the login modal
      $scope.login = function() {
        $state.go('login');
      };
      $scope.doInvest = function() {
        $state.go('perfil-investimento');
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };

      $scope.conta = $stateParams.id || null;

      $scope.go = function (destino){

        $state.go(destino);

      };



      $scope.todosBancos = [];
      $scope.listUserBank = [];




      $scope.bankInfo = [];
      $scope.bankInfo.agency = '';
      $scope.bankInfo.bancos = '';
      $scope.bankInfo.bankId = '';
      $scope.bankInfo.agencyDigit = '';
      $scope.bankInfo.accountNumber = '';
      $scope.bankInfo.accountNumber = '';
      $scope.bankInfo.accountDigit = '';
      $scope.bankInfo.defaultBankAccount = true;

      $scope.mudaBanco = function(uf, Id){

        $scope.bankInfo.bancos = uf;
        $scope.bankInfo.bankId = Id;
        //console.log($scope.bankInfo.bancos);
        $scope.listUserBank.bancosId = Id;
        $scope.listUserBank.bancos = uf;
        console.log($scope.listUserBank.bancos);
        console.log($scope.listUserBank.bancosId);
        $scope.popover.hide();

      };

      var getAllBank = BankService.getAllBanks(tokenObject);
        getAllBank.then(function(result){
          $scope.todosBancos = result.data.data;
        });

      var getAllUserBank = BankService.getAllUserBanks($scope.userInfo.userId, tokenObject);
        getAllUserBank.then(function(result){
          if(result.data.statusapp == 'OK'){
            $scope.listUserBank = result.data.data;
            angular.forEach(result.data.data, function(obj){
                $scope.bankInfo = obj;
                $scope.bankInfo.bancos = obj.bank;
            });
          }else{
            console.log("error get all user ganks");
          }
        });


      $scope.editarConta = function (index){
        $scope.conta = index.bankAccountId;
        $state.go('app.adicionar-conta', {id: index.bankAccountId});
      };
      var params = $stateParams.id || null;

      if($state.current.name == 'app.adicionar-conta'){
        var getAllUserSingBank = BankService.getAllUserSingleBanks(params, tokenObject);
          getAllUserSingBank.then(function(result){
            if(result.data.statusapp == 'OK'){
              $scope.listUserBank = result.data.data;
              $scope.listUserBank.bancosId = result.data.data.bankId;
              console.log("$scope.listUserBank");
              console.log($scope.listUserBank);
              console.log($scope.listUserBank.bancosId);
            }else{
              console.log("error get all user single ganks");
            }
          });
      }else{
        console.log("fora do state");
      }
      $scope.novaConta = function(bankAccountId) {
        try {
          if(bankAccountId != ''){
            var ct = {
              'bankAccountId': bankAccountId,
              'userId': $scope.userInfo.userId,
              'bankId': $scope.listUserBank.bancosId,
              'agency': $scope.listUserBank.agency,
              'agencyDigit': $scope.listUserBank.agencyDigit,
              'accountNumber': $scope.listUserBank.accountNumber,
              'accountDigit': $scope.listUserBank.accountDigit,
              'defaultBankAccount': false,
            };
          }else{
            var ct = {
              'bankAccountId': 0,
              'userId': $scope.userInfo.userId,
              'bankId': $scope.listUserBank.bancosId,
              'agency': $scope.listUserBank.agency,
              'agencyDigit': $scope.listUserBank.agencyDigit,
              'accountNumber': $scope.listUserBank.accountNumber,
              'accountDigit': $scope.listUserBank.accountDigit,
              'defaultBankAccount': false,
            };
          }


          console.log("ct");
          console.log(ct);
          var postConta = BankService.addUserBank(ct,tokenObject);
          postConta.then(function(result){
                  if(result.data.statusapp == 'OK'){

                  console.log(result);

                  $ionicLoading.show({
                    template: '<img src="img/popover-pic12.png" alt="" style="width: 100%;margin-top: 30px;margin-bottom: -22px;"><div class="custom-spinner-container">'+
                    '<ion-spinner name="circles"></ion-spinner><span style="margin-top: -29px;display: block;margin-bottom: 5px;">Cadastrando/Editando...</span> '+
                    '</div>',
                    duration: 3000
                  }).then(function(){

                    setTimeout(function(){
                      var myPopup = $ionicPopup.show({
                      template: 'Sua conta bancária foi cadastrada com sucesso! Lembre-se: Está não é sua conta principal.',
                      title: 'Conta Bancária',
                      scope: $scope,
                      buttons: [
                        { text: '<b>Ok</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                          $state.go('app.conta-bancaria');
                        }
                      },
                    ]
                  }); }, 4000);

                });



                }else{
                  console.log("error ao postar");
                }
            });
        } catch (e) {
            console.log(e);
        }
      };
      //POST CONTA BANCÁRIA
      $scope.postConta = function (){
        try {
          var contaObj = {
            'bankAccountId': 0,
            'userId': $scope.userInfo.userId,
            'bankId': $scope.bancosId,
            'agency': $scope.bankInfo.agency,
            'agencyDigit': $scope.bankInfo.agencyDigit,
            'accountNumber': $scope.bankInfo.accountNumber,
            'accountDigit': $scope.bankInfo.accountDigit,
            'defaultBankAccount': true,
          };

              var postConta = BankService.addUserBank(contaObj,tokenObject);
              postConta.then(function(result){
                      if(result.data.statusapp == 'OK'){

                      console.log(result);

                      $ionicLoading.show({
                        template: '<img src="img/popover-pic12.png" alt="" style="width: 100%;margin-top: 30px;margin-bottom: -22px;"><div class="custom-spinner-container">'+
                        '<ion-spinner name="circles"></ion-spinner><span style="margin-top: -29px;display: block;margin-bottom: 5px;">Cadastrando...</span> '+
                        '</div>',
                        duration: 3000
                      }).then(function(){

                        setTimeout(function(){
                          var myPopup = $ionicPopup.show({
                          template: 'Sua conta bancária foi cadastrada com sucesso!',
                          title: 'Conta Bancária',
                          scope: $scope,
                          buttons: [
                            { text: '<b>Ok</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                              $state.go('app.conta-bancaria');
                            }
                          },
                        ]
                      }); }, 4000);

                    });



                    }else{
                      console.log("error ao postar");
                    }
                });
        } catch (e) {
            console.log(e);
        }
      };

    } catch (e) {
      alert(e);
    }

  })

  .controller('homeCtrl', function($scope, $ionicModal, $timeout, $state, $filter, $ionicSlideBoxDelegate, $ionicPopover, TransactionsService, LocalStorage) {

    try {

      $scope.$root.user.app.estado = $state.current.name;

      $scope.currentDate = new Date();

      $scope.pastMonth = new Date().setDate($scope.currentDate.getDate()-30);

      $scope.UltimoInvestimento = null;

      $scope.Invested = [];

      $scope.GraficoData = [];

      $scope.GraficoLabel = [];

      $scope.MesTotal = 0;

      var tokenObject = '';

      //Get Token
      if(LocalStorage.get('AuthorizationToken') != null) {

        tokenObject = LocalStorage.get('AuthorizationToken');

      }

      $scope.GetAllInvested = function(){

        var GetAllInvestedByUserId = TransactionsService.GetAllInvestedByUserId($scope.$root.user.pessoal.userId, tokenObject);

        GetAllInvestedByUserId.then(function(result){

          if(result.data.statusapp == 'OK'){

            $scope.Invested = result.data.data;

            $scope.Investeds = $filter('orderBy')($scope.Invested, 'transactionDate');

            angular.forEach($scope.Investeds, function(invest){

              var dia = new Date(invest.transactionDate);

              if ( dia > $scope.pastMonth ){

                $scope.MesTotal += invest.roundValueInvestment;

                $scope.GraficoData.push(invest.roundValueInvestment);

                $scope.GraficoLabel.push(dia.getDate());

                $scope.UltimoInvestimento = dia;

              }

            });

            $scope.UltimoInvestimento = ( $scope.currentDate - $scope.UltimoInvestimento ) / (1000 * 3600 * 24);

            $scope.UltimoInvestimento = $scope.UltimoInvestimento.toFixed(0);

            console.log($scope.UltimoInvestimento);

            $scope.homeGrafico();

          }else {

            console.log('GetAllInvestedByUserId error');

          }

        });

      };

      $scope.GetAllInvested();

      $scope.homeGrafico = function () {

        // GRAFICO DE LINHA

        var databarSleep = {
          labels: $scope.GraficoLabel,
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              backgroundColor: "#60C750",
              pointRadius: 0,
              lineTension: 0.2,
              borderColor: "#fff",
              borderWidth: 2,
              strokeColor: "#fff",
              data: $scope.GraficoData
            }

          ]
        };

        var options = {
          scaleOverride: true,
          scaleSteps: 3,
          scaleStepWidth: 10,
          scaleStartValue: 0,
          scales: {
            yAxes: [{
              display: false
            }],
            xAxes: [{
              display: false
            }]
          }

        };

        var chartsleep = document.getElementById("charthome").getContext("2d");


        var chartsleepObj = new Chart(chartsleep, {
          type: 'line',
          scaleFontColor: "#fff",
          scaleLineColor: 'rgba(0, 0, 0, 0)',
          scaleLabel : "<%= ' R$ ' + value + ' mil '  %>",
          showTooltips : false,
          data: databarSleep,
          options: options
        });

        // GRAFICO DE BARRAS

        var dataBar = {
          labels: $scope.GraficoLabel,
          datasets: [
            {
              label: 'Line Component',
              data: $scope.GraficoData,
              fill: true,
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderColor: 'rgba(255,255,255,0)',
              hoverBackgroundColor: '#71B37C',
              hoverBorderColor: '#71B37C',
              barThickness: 20,
              scales: {
                xAxes: [{ categorySpacing: 0.5 }]
              }
            }
          ]
        };

        var optionsBar = {
          scaleOverride: true,
          barValueSpacing:20,
          scales: {
            yAxes: [{
              display: false,
              barPercentage: 1.0
            }],
            xAxes: [{
              display: false
            }]
          }

        };

        var chartBar = document.getElementById("charthomebar").getContext("2d");

        var chartBarObj = new Chart(chartBar, {
          type: 'bar',
          scaleFontColor: "#fff",
          scaleLineColor: 'rgba(0, 0, 0, 0)',
          scaleLabel : "<%= ' R$ ' + value + ' mil '  %>",
          showTooltips : false,
          data: dataBar,
          options: optionsBar
        });

      };


    } catch (e) {
      alert(e);
    }


  })

  .controller('peformanceCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      var dados = [0,4,3,5,4],
          labels = ['34', '36', '38', '40', '42'] ;

      $scope.Periodo = 1;

      $scope.Unidade = 1;

      $scope.acoes =  [
            {
              'label': 'Ações de Grandes Companhias',
              'cor': '#73FF73',
              'acoes': '1.000',
              'percent': '16%',
              'value': 'R$2,00'
            },
            {
              'label': 'Ações de Pequenas Companhias',
              'cor': '#A3D900',
              'acoes': '2.000',
              'percent': '19%',
              'value': 'R$1,30'
            },
            {
              'label': 'Ações de Mercado Emergente',
              'cor': '#B973FF',
              'acoes': '1.300',
              'percent': '10%',
              'value': 'R$1,44'
            },
            {
              'label': 'Ações de Mercado Imobiliário',
              'cor': '#26C9FF',
              'acoes': '5.000',
              'percent': '16%',
              'value': 'R$3,00'
            },
            {
              'label': 'Dívidas Corporativas',
              'cor': '#FFBF00',
              'acoes': '1.000',
              'percent': '33%',
              'value': 'R$2,20'
            },
            {
              'label': 'Dívidas Públicas',
              'cor': '#FF5C26',
              'acoes': '500',
              'percent': '6%',
              'value': 'R$1,02'
            }
          ];

      $scope.selecionaPeriodo = function(value){
        $scope.Periodo = value;
        if( value === 1 ){
          dados = [0,4,3,5,4];
          labels = ['34', '36', '38', '40', '42'] ;
        } else if( value === 2 ){
          dados = [0,4,3,5,4,6,5,4,3,5,4,6,5,9,10];
          labels = ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15'] ;
        } else if( value === 3 ){
          dados = [0,4,3,5,4,6,5,4,3,5,4,6,5,9,4,3,5,4,6,5,4,3,5,4,6,5,6,5,9,10];
          labels = ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15'] ;
        } else if( value === 4 ){
          dados = [0,4,3,5,4,6,5,4,3,5,4,6,5,3,4,3,5,4,6,5,4,3,5,4,6,5,6,5,6,7,5,4,3,5,4,6,5,4,3,5,4,6,5,6,4,3,5,4,6,5,4,3,5,4,6,5,6,5,9,10];
          labels = ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15'] ;
        } else if( value === 5 ){
          dados = [0,4,3,5,4,6,5,4,3,5,4,6,5,3,4,3,5,4,6,5,4,3,5,4,6,5,6,5,6,7,5,4,3,5,4,6,5,4,3,5,4,6,5,6,4,3,5,4,6,5,4,3,5,4,6,5,6,5,4,5,6,4,3,5,4,6,5,4,3,5,4,6,5,3,4,3,5,4,6,5,4,3,5,4,6,5,6,5,6,7,5,4,3,5,4,6,5,4,3,5,4,6,5,6,4,3,5,4,6,5,4,3,5,4,6,5,6,5,9,10];
          labels = ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15'] ;
        }
        $scope.performanceGrafico('chartperformance1');
        $scope.performanceGrafico('chartperformance2');
      };

      $scope.selecionaUnidade = function(value){
        $scope.Unidade = value;
      };

      $scope.performanceGrafico = function (id) {
        var databarSleep = {
          labels: labels,
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              backgroundColor: "#60C750",
              pointRadius: 0,
              lineTension: 0.1,
              borderColor: "#fff",
              borderWidth: 2,
              strokeColor: "#fff",
              data: dados
            }
          ]
        };

        var options = {
          scaleOverride: true,
          scaleSteps: 3,
          scaleStepWidth: 10,
          scaleStartValue: 0,
          scales: {
            yAxes: [{
              display: false
            }],
            xAxes: [{
              display: false
            }]
          }

        };

        var chartsleep = document.getElementById(id).getContext("2d");

        var chartsleepObj = new Chart(chartsleep, {
          type: 'line',
          scaleFontColor: "#fff",
          scaleLineColor: 'rgba(0, 0, 0, 0)',
          scaleLabel : "<%= ' R$ ' + value + ' mil '  %>",
          showTooltips : false,
          data: databarSleep,
          options: options
        });
      };


    } catch (e) {
        alert(e);
    }

  })

  .controller('saldoCtrl', function($scope, $ionicModal, $timeout, $state, LocalStorage, $ionicSlideBoxDelegate, $ionicPopover, TransactionsService, UserService, $ionicLoading) {

    try {

      $scope.$root.user.app.estado = $state.current.name;

      $scope.currentDate = new Date();

      $scope.Saldo = [];

      $scope.Invested = [];

      $scope.NotInvested = [];

      var tokenObject = '';

      //Get Token
      if(LocalStorage.get('AuthorizationToken') != null) {

        tokenObject = LocalStorage.get('AuthorizationToken');

      }

      $scope.GetInvestments = function(){

        $scope.Saldo = [];

        $scope.NotInvested = [];

        $scope.Invested = [];

        var GetAllNotInvestedByUserId = TransactionsService.GetAllNotInvestedByUserId($scope.$root.user.pessoal.userId, tokenObject);

        GetAllNotInvestedByUserId.then(function(result){

          if(result.data.statusapp == 'OK'){

            angular.forEach(result.data.data, function(item) {

              this.push(item);

            }, $scope.Saldo);

            $scope.NotInvested = result.data.data;

            $scope.GetAllInvested();

          }else {

            console.log('GetAllNotInvestedByUserId error');

          }

        });

      };

      $scope.GetAllInvested = function(){

        var GetAllInvestedByUserId = TransactionsService.GetAllInvestedByUserId($scope.$root.user.pessoal.userId, tokenObject);

        GetAllInvestedByUserId.then(function(result){

          if(result.data.statusapp == 'OK'){

            angular.forEach(result.data.data, function(item) {

              this.push(item);

            }, $scope.Saldo);

            $scope.Invested = result.data.data;

            $ionicLoading.hide();

          }else {

            console.log('GetAllInvestedByUserId error');

          }

        });

      };

      $scope.GetHistory = function(){

        $scope.Mensal = [];

        $scope.Anual = [];

        $scope.Tudo = [];

        var GetAllTransactionsByUserId = TransactionsService.GetAllTransactionsByUserId($scope.$root.user.pessoal.userId, tokenObject);

        GetAllTransactionsByUserId.then(function(result){

          console.log("Resultado GetAllTransactionsByUserId");
          console.log(result);

          if(result.data.statusapp == 'OK'){

            $scope.Tudo = result.data.data;

          }else {

            console.log('GetAllTransactionsByUserId error');

          }

        });

      };

      $scope.doInvestment = function(investmentId){

        $ionicLoading.show({
          template: '<img src="img/popover-pic1.png" alt="" style="width: 100%;margin-top: 30px;margin-bottom: -22px;"><div class="custom-spinner-container">'+
                       '<ion-spinner name="circles"></ion-spinner><span style="margin-top: -29px;display: block;margin-bottom: 5px;">Investindo...</span> '+
                    '</div>',
          duration: 3000
        }).then(function(){
          console.log("The loading indicator is now displayed");
        });

        var DoInvestment = TransactionsService.DoInvestment(investmentId, tokenObject);

        DoInvestment.then(function(result){

          if(result.data.statusapp === 'OK'){

            $scope.GetInvestments();

            $scope.atualizaSaldo();

          }else {

            console.log("Error no DoInvestment");

          }

        });

      };

      $scope.atualizaSaldo = function(){

        var GetProfile = UserService.getProfile($scope.$root.user.pessoal.userId, tokenObject);

        GetProfile.then(function(result){

          if(result.data.statusapp == 'OK'){

            $scope.$root.user.app.saldo = result.data.data.investmentBalance;

            //console.log($scope.$root.user.app.saldo);

          }else {

            console.log('atualizaSaldo error');

          }

        });

      };




    } catch (e) {
      alert(e);
    }



  })

  .controller('creditoCtrl', function($scope, $ionicModal, $timeout, $state, $cordovaContacts, $ionicPlatform ,$ionicSlideBoxDelegate, $ionicPopover, $ionicLoading) {

    try {

      $scope.$root.user.app.estado = $state.current.name;

      $scope.Valor = 1;

      $scope.Formulario = 0;

      $scope.phoneContacts = [];

      $ionicPlatform.ready(function(){

        $ionicLoading.show({
          template: '<img src="img/popover-pic12.png" alt="" style="width: 60%;margin-top: 40px;margin-bottom: 10px;"><div class="custom-spinner-container">'+
          '<ion-spinner name="circles"></ion-spinner><span style="margin-top: -29px;display: block;margin-bottom: 5px;">Carregando...</span> '+
          '</div>',
          duration: 10000
        });

        var options = {};

        options.multiple = true;

        $cordovaContacts.find(options).then(function(result) {

          $scope.phoneContacts = [];

          for (var i = 0; i < result.length; i++) {

            var contact = result[i];

            if(contact.phoneNumbers != null){

              $scope.phoneContacts.push(contact);

            }

          }

          $ionicLoading.hide();

        }, function(error) {

          console.log("ERROR: " + error);

        });

      });

      $scope.Contato = {};

      $scope.recomendarAmigo = function(id){

        $scope.Formulario = 1;

        $scope.Contato = $scope.phoneContacts[id];

      };

      $scope.recomendarEnviado = function(id){

        $scope.Formulario = 0;

      };

      $scope.recomendarEnviar = function(id){

        $scope.Formulario = 2;

      };


    } catch (e) {
      alert(e);
    }

  })

  .controller('programadoCtrl', function($scope, $ionicModal, $timeout, $state, $stateParams) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.Id = $stateParams.id || null;

      $scope.dia = new Date();

      if ( $scope.Id === null ){

        $scope.investimento = {
          id : $scope.$root.user.app.investimentos[$scope.$root.user.app.investimentos.length - 1].id +1 || 0,
          type : 1,
          value : '0,00',
          day : new Date()
        };

      } else {

        $scope.investimento = {
          id    : $scope.$root.user.app.investimentos[$scope.Id].id,
          type  : $scope.$root.user.app.investimentos[$scope.Id].type,
          value : $scope.$root.user.app.investimentos[$scope.Id].value,
          day   : $scope.$root.user.app.investimentos[$scope.Id].day
        };

      }

      $scope.Cursor = 0;

      $scope.selecionaPeriodo = function(value){

        $scope.investimento.type = parseInt(value);

      };

      $scope.salvarInvestimento = function (){

        var obj = {
          id    : $scope.investimento.id,
          type  : $scope.investimento.type,
          value : $scope.investimento.value,
          day   : $scope.investimento.day
        };

        if ( $scope.Id === null ){

          $scope.$root.user.app.investimentos.push(obj);

        } else {

          $scope.$root.user.app.investimentos[$scope.Id] = obj;

        }

        $state.go('app.investimento-programado');

      };

      $scope.cancelarInvestimento = function (index){

          console.log(index);

          $state.go('app.cancelar-investimento', {id: index});

      };


      $scope.delTeclado = function(value){

        var vlr = $scope.investimento.value.toString();

        vlr = vlr.replace(',','');

        if($scope.Cursor === 0){

        } else if($scope.Cursor === 1){

          vlr = '000';

          $scope.Cursor--;

        }  else if($scope.Cursor === 2){

          vlr =  '0'+ vlr.substring(0, vlr.length - 1);

          $scope.Cursor--;

        } else if($scope.Cursor === 3){

          vlr = '0'+ vlr.substring(0, vlr.length - 1);

          $scope.Cursor--;

        }else {

          vlr = vlr.substring(0, vlr.length - 1);

          $scope.Cursor--;

        }

        $scope.investimento.value = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

      };

      $scope.clicaTeclado = function(value){

        var vlr = $scope.investimento.value.toString();

        vlr = vlr.replace(',','');

        vlr = $scope.formataDecimal(value,vlr);

        $scope.Cursor++;

        $scope.investimento.value = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

      };

      $scope.formataDecimal = function(value,vlr){

        if($scope.Cursor === 0){

          vlr = '00'+ value;

        } else if($scope.Cursor === 1){

          vlr = '0' + vlr.substring(vlr.length-1, vlr.length) + value;

        } else if($scope.Cursor === 2){

          vlr =  vlr.substring(vlr.length-2, vlr.length) + value;

        } else if($scope.Cursor === 3){

          vlr = vlr.substring(vlr.length-3, vlr.length) + value;

        } else {

          vlr += '' + value;

        }

        return vlr;

      };

      $scope.limpaTeclado = function(){

        $scope.investimento.value = '0,00';

        $scope.Cursor = 0;

      };

    } catch (e) {
        alert(e);
    }


  })

  .controller('investimentosCtrl', function($scope, $ionicModal, $timeout, $state) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.investimento = null;

      $scope.editarInvestimento = function (index){

        $scope.investimento = index;

        $state.go('app.adicionar-investimento', {id: index});

      };

    } catch (e) {
        alert(e);
    }


  })

  .controller('cancelarInvestimentoCtrl', function($scope, $state, $stateParams) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.Id = parseInt($stateParams.id);

      $scope.cancelar = $scope.$root.user.app.investimentos[$scope.Id];

      $scope.cancelarInvestimento = function (){

        $scope.$root.user.app.investimentos.splice($scope.Id,1);

        $state.go('app.investimento-programado');

      };
    } catch (e) {
        alert(e);
    }



  })

  .controller('saqueCtrl', function($scope, $ionicModal, $timeout, $state) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.Valor = '0,00';

      $scope.Cursor = 0;

      $scope.movimento = 0;

      $scope.Autorizado = 0;

      $scope.movimentar = function(tipo) {

        $scope.movimento = tipo;

        if (tipo === 1){ // SACAR

          var investido = $scope.$root.user.app.saldo,
              total = $scope.Valor,
              unidade = 0,
              invLen = 0;

          total = total.replace(',','').replace('.','');

          investido = investido.replace(',','').replace('.','');

          if(parseFloat(investido) > parseFloat(total)){ // TEM SALDO? SIM

            investido = parseFloat(investido) - parseFloat(total);

            investido = investido.toString();

            unidade = investido.substring(0, investido.length - 2) || '0';

            invLen = investido.length;

            if(unidade.length < 4){

              investido = unidade + ',' + investido.substring(invLen - 2, invLen);

            } else {

              investido = investido.substring(0, invLen - 5)+'.' + investido.substring(invLen - 5, invLen - 2) + ',' + investido.substring(invLen - 2, invLen);

            }

            $scope.$root.user.app.saldo = investido;

            $scope.Valor = '0,00';

            $scope.Cursor = 0;

            $scope.movimento = 1;

            $scope.Deposito = $scope.Valor;

            $scope.Autorizado = 1;

          } else { //NAO TEM SALDO

            console.log('no');

            $scope.Autorizado = 0;

          }

        } else if(tipo === 2){ // DEPOSITAR

          var investido = $scope.$root.user.app.saldo,
              total = $scope.Valor,
              unidade = 0,
              invLen = 0;

          $scope.movimento = 2;

          $scope.Deposito = $scope.Valor;

          total = total.replace(',','').replace('.','');

          investido = investido.replace(',','').replace('.','');

          investido = parseFloat(total) + parseFloat(investido);

          investido = investido.toString();

          unidade = investido.substring(0, investido.length - 2) || '0';

          invLen = investido.length;

          if(unidade.length < 4){

            investido = unidade + ',' + investido.substring(invLen - 2, invLen);

          } else {

            investido = investido.substring(0, invLen - 5)+'.' + investido.substring(invLen - 5, invLen - 2) + ',' + investido.substring(invLen - 2, invLen);

          }

          $scope.$root.user.app.saldo = investido;

          $scope.Valor = '0,00';

          $scope.Cursor = 0;

        }

      };


      $scope.delTeclado = function(value){

        var vlr = $scope.Valor.toString();

        vlr = vlr.replace(',','').replace('.','');

        if($scope.Cursor === 0){

        } else if($scope.Cursor === 1){

          vlr = '000';

          $scope.Cursor--;

        }  else if($scope.Cursor === 2){

          vlr =  '0'+ vlr.substring(0, vlr.length - 1);

          $scope.Cursor--;

        } else if($scope.Cursor === 3){

          vlr = '0'+ vlr.substring(0, vlr.length - 1);

          $scope.Cursor--;

        }else {

          vlr = vlr.substring(0, vlr.length - 1);

          $scope.Cursor--;

        }

        if($scope.Cursor < 7){

          $scope.Valor = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

        } else {

          $scope.Valor = vlr.substring(0, vlr.length - 4)+'.' + vlr.substring(vlr.length - 4, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

        }

      };

      $scope.clicaTeclado = function(value){

        var vlr = $scope.Valor.toString();

        if(vlr.length < $scope.$root.user.app.saldo.length){

          vlr = vlr.replace(',','').replace('.','');

          vlr = $scope.formataDecimal(value,vlr);

          $scope.Cursor++;

          if($scope.Cursor < 6){

            $scope.Valor = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

          } else {

            $scope.Valor = vlr.substring(0, vlr.length - 5)+'.' + vlr.substring(vlr.length - 5, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

          }

        }

      };

      $scope.formataDecimal = function(value,vlr){

        if($scope.Cursor === 0){

          vlr = '00'+ value;

        } else if($scope.Cursor === 1){

          vlr = '0' + vlr.substring(vlr.length-1, vlr.length) + value;

        } else if($scope.Cursor === 2){

          vlr =  vlr.substring(vlr.length-2, vlr.length) + value;

        } else if($scope.Cursor === 3){

          vlr = vlr.substring(vlr.length-3, vlr.length) + value;

        } else {

          vlr += '' + value;

        }

        return vlr;

      };

      $scope.limpaTeclado = function(){

        $scope.Valor = '0,00';

        $scope.Cursor = 0;

      };
    } catch (e) {
        alert(e);
    }



  })

  .controller('dadosCtrl', function($scope, $ionicModal, $timeout, $state, Camera, LocalStorage, UserService) {

    $scope.userInfo = LocalStorage.get('UserProfile');
    console.log($scope.userInfo);

    $scope.mudaUF = function(uf){

      $scope.$root.user.app.uf = uf;
      $scope.$root.user.financeiro.emprego = uf;
      $scope.userInfo.state = uf;
      console.log($scope.userInfo.state);

      $scope.popover.hide();

    };

    var tokenObject = '';

    //Get Token
    if(LocalStorage.get('AuthorizationToken') != null) {

      tokenObject = LocalStorage.get('AuthorizationToken');

    }

    $scope.$root.user.app.estado = $state.current.name;
    console.log($scope.$root.user.app.estado);
    console.log($scope.userInfo.userId);

    $scope.updateUser = function () {
        try {
          var up = {
            'userId': $scope.userInfo.userId,
            'planId': 1,
            'fullName': $scope.userInfo.fullName,
            'dob': $scope.userInfo.dob,
            'securityQuestion': $scope.userInfo.securityQuestion,
            'securityAnswer': $scope.userInfo.securityAnswer,
            'gender': 'undefined',
            'avatar': '',
            'address': $scope.userInfo.address,
            'city': $scope.userInfo.city,
            'state': $scope.userInfo.state,
            'countryId': 55,
            'zipCode': $scope.userInfo.zipCode,
            'phone1': $scope.userInfo.phone1,
            'phone2': '',
            'cellphone': '',
            'status': 1,
            'userType': 1,
            'acceptContract': true,
            'email': $scope.userInfo.email,
            'password': $scope.userInfo.password,
            'smsNotification': true,
            'emailNotification': true,
            'rememberToken': true,
            'cpf': $scope.userInfo.cpf,
            'rg': $scope.userInfo.rg,
            'investorProfile': '',
            'investmentBalance': 0,
          };

          console.log(JSON.stringify(up));

              var updateAcc = UserService.updateProfile(up ,tokenObject);
                updateAcc.then(function(result){
                  console.log("Promisse");
                  console.log(result);
                });
        } catch (e) {
          console.log(e);
        }
    };

      $scope.takePicture = function (options) {

        var options = {
          quality : 75,
          targetWidth: 200,
          targetHeight: 200,
          sourceType: 1
        };

        Camera.getPicture(options).then(function(imageData) {
          $scope.picture = imageData;
        }, function(err) {
          console.log(err);
        });

      };



      $scope.Valor = '';

      $scope.Cursor = 0;

      $scope.delTeclado = function(value){

        var vlr = $scope.Valor;

        if(vlr.length > 0){

          vlr = vlr.substring(0, vlr.length - 1);

        }

        $scope.Valor = vlr;

        $scope.atualizaPin();

      };

      $scope.atualizaPin = function(){

        $scope.Pin = ($scope.Valor.length * 25) + '%';

      };

      $scope.clicaTeclado = function(value){

        if($scope.Valor.length < 4){

          $scope.Valor += value;

        }

        $scope.atualizaPin();

      };

      $scope.limpaTeclado = function(){

        $scope.Valor = '';

        $scope.atualizaPin();

      };





  })

  .controller('contasCtrl', function($stateParams, $scope, $ionicModal, $timeout, $state) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.conta = $stateParams.id || null;

      $scope.go = function (destino){

        $state.go(destino);

      };

      $scope.editarConta = function (index){

        $scope.conta = index;

        $state.go('app.adicionar-conta', {id: index});

      };
    } catch (e) {
      alert(e);
    }


  })

  .controller('cancelarContaCtrl', function($scope, $state, $stateParams) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.Id = parseInt($stateParams.id);

      $scope.cancelar = $scope.$root.user.app.cartoes[$scope.Id];

      $scope.cancelarConta = function (){

        $scope.$root.user.app.cartoes.splice($scope.Id,1);

        $state.go('app.arredondamentos');

      };
    } catch (e) {
        alert(e);
    }


  })

  .controller('adicionarContaCtrl', function($scope, $state, $stateParams) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.conta = parseInt($stateParams.id) || null;

      $scope.cancelar = $scope.$root.user.app.cartoes[$scope.conta];

      $scope.cancelarConta = function (){

        $state.go('app.cancelar-conta', {id: $scope.conta});

      };

    } catch (e) {
        alert(e);
    }


  })

  .controller('perfilCtrl', function($scope, $state, $timeout) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.perfil = $scope.$root.user.app.perfis[$scope.$root.user.app.perfil];

      $scope.perfilIndex = 0;

      $scope.calculaIdade = function(){

        var birthday = new Date($scope.$root.user.pessoal.dob);

        var ageDifMs = Date.now() - birthday.getTime();

        var ageDate = new Date(ageDifMs); // miliseconds from epoch

        return Math.abs(ageDate.getUTCFullYear() - 1970);

      };

      $scope.idade = $scope.calculaIdade();

      $scope.idadesimulada = $scope.idade + 10;

      $scope.valor = null;

      $scope.mensal = 10;

      $scope.eixoX = [];

      $scope.graphData = [];

      var i = $scope.idade,
          idade = i,
          mensal = $scope.mensal,
          total = 0,
          unidade = null,
          invLen = null;

      $scope.detalharAcao = function (perfil,id) {

        console.log($scope.$root.user.app.perfis[perfil].acoes[id]);

      };

      $scope.gerarDados = function () {

        idade = $scope.idadesimulada;

        $scope.eixoX = [];

        for ( i = idade; i <= (idade + 13) ; i ++ ){

          if(!( i % 2)){

            $scope.eixoX.push(i);

          }

        }

        for ( i = 0; i < 7 ; i ++ ){

          $scope.graphData.push(i * $scope.mensal * 24);

        }

        total = 6 * $scope.mensal * 24;

        $scope.valor = total;

      };

      $scope.gerarDados($scope.idade);

      $scope.mudarPerfil = function (id) {

        $scope.perfilIndex = id;

        $scope.perfil = $scope.$root.user.app.perfis[$scope.perfilIndex];

        $scope.perfilGraficoPie();

      };

      $scope.proximoPerfil = function () {

        if($scope.perfilIndex == $scope.$root.user.app.perfis.length -1){

          $scope.perfilIndex = 0;

        }else {

          $scope.perfilIndex++;

        }

        $scope.perfil = $scope.$root.user.app.perfis[$scope.perfilIndex];

        $scope.perfilGraficoPie();

      };

      $scope.anteriorPerfil = function () {

        if($scope.perfilIndex == 0){
          $scope.perfilIndex = $scope.$root.user.app.perfis.length - 1;
        }else {
          $scope.perfilIndex--;
        }
        $scope.perfil = $scope.$root.user.app.perfis[$scope.perfilIndex];

        $scope.perfilGraficoPie();

      };

      $scope.atualizarGrafico = function (valor,tipo) {

        console.log('antes');

        if (tipo === 'idade' ){

          i = idade = parseInt(valor);

          $scope.eixoX = [];

          for ( i; i <= (idade + 13) ; i ++ ){

            if(!( i % 2)){

              $scope.eixoX.push(i);

            }

          }

        } else {

          if (tipo === 'mensal') {

            mensal = parseInt(valor);

            valor = mensal * 144;

          } else if (tipo === 'valor') {

            mensal = parseInt(valor / 144);

            valor = parseInt(valor);

          }

          $scope.graphData = [];

          for (i = 0; i < 7; i++) {

            $scope.graphData.push(i * $scope.mensal * 24);

          }

          $scope.atualizaSliders(valor, mensal);

        }

        $scope.perfilGrafico();

      };

      $scope.atualizaSliders = function (val, mes) {

        $scope.valor = val;

        $scope.mensal = mes;

        /*$timeout(function () {
          $scope.$apply(function () {

            $scope.valor = val;

            $scope.mensal = mes;
            console.log("Timeout called!");
          });
        }, 1000);*/

      };

      $scope.perfilGrafico = function () {
        var databarSleep = {
          labels: $scope.eixoX,
          datasets: [
            {
              label: "My First dataset",
              fill: false,
              pointRadius: 0,
              lineTension: 0.1,
              borderColor: "#fff",
              borderWidth: 0.8,
              strokeColor: "#fff",
              data: $scope.graphData
            }
          ]
        };

        var options = {
          /*scaleOverride: true,
          scaleSteps: 3,
          scaleStepWidth: 10,
          scaleStartValue: 0,*/
          scales: {
            yAxes: [{
              gridLines: {color:"#4EA5B4",zeroLineColor:"#4EA5B4"},
              ticks: {
                fontColor : "#9CCDD4",
                fontSize: 10,
                callback: function(value, index, values) {
                  if(parseInt(value) > 999){
                    return 'R$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "," + '');
                  } else {
                    return 'R$ ' + value + ' ';
                  }
                }
              }
            }],
            xAxes: [{
              gridLines: {color:"#4EA5B4",zeroLineColor:"#4EA5B4"},
              ticks: {
                fontColor : "#9CCDD4",
                fontSize: 10

              },

            }]
          }

        };

        var chartsleep = document.getElementById("chartlineperfil").getContext("2d");

        var chartsleepObj = new Chart(chartsleep, {
          type: 'line',
          scaleFontColor: "#fff",
          scaleLineColor: 'rgba(0, 0, 0, 0)',
          scaleLabel : "<%= ' R$ ' + value + ' mil '  %>",
          showTooltips : false,
          data: databarSleep,
          options: options
        });
      };

      $scope.perfilGraficoPie = function () {

        var options = {},
            obj = {},
            acoes = $scope.perfil.acoes,
            labels = [],
            values = [],
            colors = [];

        angular.forEach (acoes, function(obj){
          labels.push(obj.label);
          values.push(obj.value);
          colors.push(obj.cor);

        });

        var data = {
          labels: labels,
          datasets: [
            {
              data: values,
              borderWidth: 0,
              backgroundColor: colors,
              hoverBackgroundColor: colors
            }]
        };

        var chartpie = document.getElementById("chartpieperfil").getContext("2d");

        var chartpieObj = new Chart(chartpie,{
          type: 'pie',
          data: data,
          options: options
        });

      };

      $scope.selecionarPerfil = function (){

        $state.go('app.selecionar-perfil', {id: $scope.perfilIndex});

      };
    } catch (e) {
      alert(e);
    }


  })

  .controller('selecionarPerfilCtrl', function($scope, $state, $stateParams) {

    try {
      $scope.$root.user.app.estado = $state.current.name;

      $scope.Id = parseInt($stateParams.id);

      $scope.perfil = $scope.$root.user.app.perfis[$scope.Id];

      $scope.selecionarPerfil = function (){

        $scope.$root.user.app.perfil = $scope.Id;

        $state.go('app.perfil');

      };
    } catch (e) {
        alert(e);
    }



  })

  .controller('legalCtrl', function($scope, $state) {
    try {
        $scope.$root.user.app.estado = $state.current.name;
    } catch (e) {
        alert(e);
    }

  })

  .controller('ajudaSegurancaCtrl', function($scope, $state) {
    try {
      $scope.$root.user.app.estado = $state.current.name;
    } catch (e) {
      alert(e);
    }

  })

  .controller('suporteCtrl', function($scope, $state) {
    try {
      $scope.$root.user.app.estado = $state.current.name;
    } catch (e) {
        alert(e);
    }

  })

  .controller('faqCtrl', function($scope, $state) {
    try {
      $scope.$root.user.app.estado = $state.current.name;
    } catch (e) {
        alert(e);
    }

  })

  .controller('ajudaCtrl', function($scope, $state) {
    try {
      $scope.$root.user.app.estado = $state.current.name;


    } catch (e) {
        alert(e);
    }

  })

  .controller('segurancaCtrl', function($scope, $state) {
    try {

      $scope.pin = '/img/pin-vazio.png';

      $scope.$root.user.app.estado = $state.current.name;

      $scope.Cursor = 0;

      $scope.Valor = '';

        $scope.delTeclado = function(value){

        var vlr = $scope.Valor;

        if(vlr.length > 0){

          vlr = vlr.substring(0, vlr.length - 1);

        }

        $scope.Valor = vlr;

        $scope.atualizaPin();

      };

      $scope.atualizaPin = function(){

        var valor = $scope.Valor.length;

        if(valor === 0){

          valor = 'vazio';

        }

        $scope.pin = '/img/pin-' + valor + '.png';

      };

      $scope.clicaTeclado = function(value){

        if($scope.Valor.length < 4){

          $scope.Valor += value;

        }

        console.log($scope.Valor);

        $scope.atualizaPin();

      };

      $scope.limpaTeclado = function(){

        $scope.Valor = '';

        $scope.atualizaPin();

      };


    } catch (e) {
        alert(e);
    }

  })

  .controller('configuracoesCtrl', function($scope, $state) {
    try {
      $scope.$root.user.app.estado = $state.current.name;
    } catch (e) {
        alert(e);
    }

  })

  .controller('preferenciasCtrl', function($scope, $state) {
    try {
      $scope.$root.user.app.estado = $state.current.name;
    } catch (e) {
        alert(e);
    }

  })

  .controller('conta-bancariaCtrl', function($scope, $state, BankService, LocalStorage) {

      $scope.$root.user.app.estado = $state.current.name;

      var tokenObject = '';

      //Get Token
      if(LocalStorage.get('AuthorizationToken') != null) {

        tokenObject = LocalStorage.get('AuthorizationToken');

      }

      $scope.todosBancos = [];

      var getAllBank = BankService.getAllBanks(tokenObject);
        getAllBank.then(function(result){
          $scope.todosBancos = result.data.data;
          console.log("Bancos get");
          console.log($scope.todosBancos);
        });

  });

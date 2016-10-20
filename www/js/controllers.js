angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.homeGrafico = function () {
    var databarSleep = {
      labels: ['34', '36', '38', '40', '42', '44', '46', '48', '50'],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: "#60C750",
          pointRadius: 0,
          lineTension: 1,
          borderColor: "#fff",
          borderWidth: 2,
          strokeColor: "#fff",
          data: [0,4,3,5,4,6,5,9,10]
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
  }


  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.Tour = '';

  $scope.openPopover = function($event, tour) {
    $scope.Tour = tour;
    $scope.popover.show($event);
  };

  $scope.uf = 'UF';
  $scope.bandeiras = 'Bandeiras';
  $scope.banco = 'Banco';

  $scope.mudaUF = function(uf){

    $scope.uf = uf;

    $scope.popover.hide();

  };

  $scope.mudaBandeira = function(bandeira){
    $scope.bandeiras = bandeira;
    $scope.popover.hide();
  };

  $scope.mudaConta = function(conta){
    $scope.banco = conta;
    $scope.popover.hide();
  };

  // Form data for the login modal
  $scope.loginData = {};
  console.log("Perfil ctrl");
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

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.doQuestion = function (){
      $state.go('pergunta-2');
    };
    $scope.doQuestion3 = function (){
      $state.go('pergunta-3');
    };
    $scope.doQuestion4 = function (){
      $state.go('pergunta-4');
    };
    $scope.doQuestion5 = function (){
      $state.go('pergunta-5');
    };
    $scope.doQuestion6 = function (){
      $state.go('pergunta-6');
    };
    $scope.doQuestion7 = function (){
      $state.go('pergunta-7');
    };
    $scope.doQuestion8 = function (){
      $state.go('pergunta-8');
    };
    $scope.doQuestion9 = function (){
      $state.go('pergunta-9');
    };
    $scope.doQuestion10 = function (){
      $state.go('pergunta-10');
    };
    $scope.doQuestion11 = function (){
      $state.go('pergunta-11');
    };
    $scope.doQuestion12 = function (){
      $state.go('pergunta-12');
    };
    $scope.doQuestion13 = function (){
      $state.go('pergunta-13');
    };
    $scope.doFinalQuestion = function (){
      $state.go('pergunta-final');
    };
    $scope.doWelcome = function (){
      $state.go('bem-vindo');
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
})
  .controller('peformanceCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {
    $scope.Periodo = 1;
    $scope.Unidade = 1;
    $scope.acoes =  [
          {
            'label': 'Ações de Grandes Companias',
            'cor': '#73FF73',
            'value': 16
          },
          {
            'label': 'Ações de Pequenas Companias',
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
        ];
    $scope.selecionaPeriodo = function(value){
      $scope.Periodo = value;
    };

    $scope.selecionaUnidade = function(value){
      $scope.Unidade = value;
    };
    $scope.performanceGrafico = function (id) {
      var databarSleep = {
        labels: ['34', '36', '38', '40', '42', '44', '46', '48', '50'],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: "#60C750",
            pointRadius: 0,
            lineTension: 1,
            borderColor: "#fff",
            borderWidth: 2,
            strokeColor: "#fff",
            data: [0,4,3,5,4,6,5,9,10]
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
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

  })
.controller('loginCtrl', function($scope, $ionicModal, $timeout, $state) {
    $scope.resetPass = function(){
      $state.go('resetar-senha');
    };
    $scope.SendSucessPass = function(){
      $state.go('sucesso-senha');
    };
    $scope.login = function(){
      $state.go('login');
    };
})
  .controller('programadoCtrl', function($scope, $ionicModal, $timeout, $state) {

    $scope.Periodo = 1;

    $scope.Valor = '0,00';

    $scope.Cursor = 0;

    $scope.selecionaPeriodo = function(value){
      $scope.Periodo = value;
    };

    $scope.delTeclado = function(value){

      var vlr = $scope.Valor.toString();

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

      $scope.Valor = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);




    };

    $scope.clicaTeclado = function(value){

      var vlr = $scope.Valor.toString();

      vlr = vlr.replace(',','');

      vlr = $scope.formataDecimal(value,vlr);

      $scope.Cursor++;

      $scope.Valor = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

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

  })
  .controller('saqueCtrl', function($scope, $ionicModal, $timeout, $state) {

    $scope.Valor = '0,00';

    $scope.Cursor = 0;

    $scope.delTeclado = function(value){

      var vlr = $scope.Valor.toString();

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

      $scope.Valor = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

    };

    $scope.clicaTeclado = function(value){

      var vlr = $scope.Valor.toString();

      vlr = vlr.replace(',','');

      vlr = $scope.formataDecimal(value,vlr);

      $scope.Cursor++;

      $scope.Valor = vlr.substring(0, vlr.length - 2)+',' + vlr.substring(vlr.length - 2, vlr.length);

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

  })
  .controller('dadosCtrl', function($scope, $ionicModal, $timeout, $state) {

    $scope.Valor = '';

    $scope.Pin = '0%';

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
.controller('perfilCtrl', function($scope, $state) {

  $scope.perfis = [
    {
      'nome' : 'Conservador',
      'nivel' : 1,
      'desc' : 'Para investidores com capital de investimento',
      'select' : false,
      'acoes' :  [
        {
          'label': 'Ações de Grandes Companias',
          'cor': '#73FF73',
          'value': 16
        },
        {
          'label': 'Ações de Pequenas Companias',
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
          'label': 'Ações de Grandes Companias',
          'cor': '#73FF73',
          'value': 14
        },
        {
          'label': 'Ações de Pequenas Companias',
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
          'label': 'Ações de Grandes Companias',
          'cor': '#73FF73',
          'value': 16
        },
        {
          'label': 'Ações de Pequenas Companias',
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
          'label': 'Ações de Grandes Companias',
          'cor': '#73FF73',
          'value': 13
        },
        {
          'label': 'Ações de Pequenas Companias',
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
          'label': 'Ações de Grandes Companias',
          'cor': '#73FF73',
          'value': 14
        },
        {
          'label': 'Ações de Pequenas Companias',
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

    }
  ];

  $scope.perfil = $scope.perfis[0];

  $scope.perfilIndex = 0;

  $scope.idade = 42;

  $scope.valor = 3111;

  $scope.mensal = 10;

  $scope.proximoPerfil = function () {

    if($scope.perfilIndex == $scope.perfis.length -1){
      $scope.perfilIndex = 0;
    }else {
      $scope.perfilIndex++;
    }
    $scope.perfil = $scope.perfis[$scope.perfilIndex];

    $scope.perfilGraficoPie();

  };

  $scope.anteriorPerfil = function () {

    if($scope.perfilIndex == 0){
      $scope.perfilIndex = $scope.perfis.length - 1;
    }else {
      $scope.perfilIndex--;
    }
    $scope.perfil = $scope.perfis[$scope.perfilIndex];

    $scope.perfilGraficoPie();

  };

  $scope.perfilGrafico = function () {
    var databarSleep = {
      labels: ['34', '36', '38', '40', '42', '44', '46', '48', '50'],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          pointRadius: 0,
          lineTension: 0.1,
          borderColor: "#fff",
          borderWidth: 0.8,
          strokeColor: "#fff",
          data: [0,0.8,1.5,2.3,3.3,4.5,6.3,9,12],
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
          gridLines: {color:"#4EA5B4",zeroLineColor:"#4EA5B4"},
          ticks: {
            max: 12,
            min: 0,
            fontColor : "#9CCDD4",
            fontSize: 10,
            stepSize:3,
            callback: function(value, index, values) {
              if(parseInt(value) > 1000){
                return 'R$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "," + ' mil');
              } else {
                return 'R$ ' + value + ' mil';
              }
            }
          }
        }],
        xAxes: [{
          gridLines: {color:"#4EA5B4",zeroLineColor:"#4EA5B4"},
          ticks: {
            max: 50,
            min: 34,
            stepSize:2,
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



});

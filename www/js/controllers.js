angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.idade = 42;

  $scope.valor = 3111;

  $scope.mensal = 10;


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
    $scope.adicionarConta = function (){
      $state.go('app.adicionar-conta');
    };
    $scope.adicionarPreferencia = function (){
      $state.go('app.preferencias');
    };
    $scope.adicionarContaBancaria = function (){
      $state.go('app.conta-bancaria');
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
.controller('perfilCtrl', function($scope, $state) {

  $scope.perfis = [
    {
      'nome' : 'Moderado/Agressivo',
      'nivel' : 1,
      'desc' : 'Para investidores com capital de investimento',
      'select' : false,
      'acoes' :  [
        {
          'label' : 'Ações de Grandes Companias',
          'value' : 16,
          'pequenasCias' : 19,
          'emergente' : 10,
          'imobilario' : 16,
          'corp' : 33,
          'gov' : 6
        }
      ]


    }
  ];

  $scope.perfil = $scope.perfis[0];

  $scope.perfilGraficoPie = function () {

    var options = {};

    var data = {
      labels: [
        "Ações de Grandes Companias",
        "Ações de Pequenas Companias",
        "Ações de Mercado Emergente",
        "Ações de Mercado Imobiliário",
        "Dívidas Corporativas",
        "Dívidas Públicas"
      ],
      datasets: [
        {
          data: [16,19,10,16,33,6],
          borderWidth: 0,
          backgroundColor: ["#73FF73","#A3D900","#B973FF","#26C9FF","#FFBF00","#FF5C26"],
          hoverBackgroundColor: ["#73FF73","#A3D900","#B973FF","#26C9FF","#FFBF00","#FF5C26"]
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

angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {

  $scope.slideHasChanged = function($index){
    //alert('slideHasChanged $index=' + $index);
    if($index === 6){
      var myClasses = document.querySelectorAll('.slider-pager'),i = 0,l = myClasses.length;

      for (i; i < l; i++) {
        myClasses[i].style.display = 'none';
      }

      document.getElementById('footer-apresentacao').style.display = 'none';
    }
    else {
      var myClasses = document.querySelectorAll('.slider-pager'),i = 0,l = myClasses.length;

      for (i; i < l; i++) {
        myClasses[i].style.display = 'block';
      }
    }
  };

  $scope.estado = $state.current.name;

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.Tour = '';

  $scope.openPopover = function($event, estado) {
    $scope.estado = estado;
    $scope.popover.show($event);
    console.log($scope.estado);
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

  $scope.go = function (destino){

    $state.go(destino);

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

  .controller('homeCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {

    $scope.homeGrafico = function () {

      // GRAFICO DE LINHA

      var databarSleep = {
        labels: ['34', '36', '38', '40', '42', '44', '46', '48', '50'],
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
            data: [1,3,2,3,5,7,6,8,9]
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
        labels: ['34', '36', '38', '40', '42', '44', '46', '48', '50'],
        datasets: [
          {
            label: 'Line Component',
            data: [1.2,1.5,2,1.5,2.4,3,2.6,3.4,3],
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

    $scope.openPopover = function($event, estado) {
      $scope.estado = estado;
      $scope.popover.show($event);
      console.log($scope.estado);
    };


    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];

    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

  })

  .controller('peformanceCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {

    var dados = [0,4,3,5,4],
        labels = ['34', '36', '38', '40', '42'] ;

    $scope.Periodo = 1;

    $scope.Unidade = 1;

    $scope.acoes =  [
          {
            'label': 'Ações de Grandes Companias',
            'cor': '#73FF73',
            'acoes': '1.000',
            'percent': '16%',
            'value': 'R$2,00'
          },
          {
            'label': 'Ações de Pequenas Companias',
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


  })

  .controller('saldoCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {

    $scope.Valor = '2,30';

    $scope.Meta = '5,00';

    $scope.Investido = '1.325,14';

    $scope.Deposito = '';

    $scope.movimento = 0;

    $scope.Percent = (parseFloat($scope.Valor) / parseFloat($scope.Meta)*100) + '%';

    $scope.atualizaPercent = function(){

      var meta  = $scope.Meta,
          total = $scope.Valor;

      meta = meta.replace(',','');

      total = total.replace(',','');

      $scope.Percent = (parseFloat(total) / parseFloat(meta)*90) + '%';

    };

    $scope.aprovarInvestimento = function(id){

      $scope.Saldo[id].status = 1;

      var vlr = $scope.Saldo[id].value,
          total = $scope.Valor,
          soma = 0,
          unidade = 0;

      vlr = vlr.replace(',','');

      total = total.replace(',','');

      soma = parseFloat(total) + parseFloat(vlr);

      soma = soma.toString();

      unidade = soma.substring(0, soma.length - 2) || '0';

      soma = unidade + ',' + soma.substring(soma.length - 2, soma.length);

      $scope.Valor = soma;

      $scope.atualizaPercent();

    };

    $scope.movimentar = function(tipo) {

      if(tipo === 1 ){

        var investido = $scope.Investido,
            total = $scope.Valor,
            unidade = 0,
            invLen = 0;

        $scope.movimento = 1;

        $scope.Deposito = $scope.Valor;

        total = total.replace(',','');

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

        $scope.Investido = investido;

        $scope.Valor = '0';

        $scope.atualizaPercent();

      }

      $scope.movimento = tipo;

    };

    $scope.Saldo =  [
      {
        'id': 1,
        'label': 'R$ 4,64 Starbucks',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '+',
        'status': 0,
        'value': '0,36'
      },
      {
        'id': 2,
        'label': 'R$ 5,03 Extra',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '+',
        'status': 0,
        'value': '0,97'
      },
      {
        'id': 3,
        'label': 'R$ 4,13 Padoca Gold',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '-',
        'status': 0,
        'value': '0,87'
      },
      {
        'id': 4,
        'label': 'R$ 4,64 Lojas Riachuelo',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '+',
        'status': 0,
        'value': '0,36'
      },
      {
        'id': 5,
        'label': 'R$ 4,64 Kabum Eletrônicos',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '-',
        'status': 0,
        'value': '0,36'
      },
      {
        'id': 6,
        'label': 'R$ 4,64 Starbucks',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '+',
        'status': 0,
        'value': '0,36'
      },
      {
        'id': 7,
        'label': 'R$ 4,64 Starbucks',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '+',
        'status': 1,
        'value': '0,36'
      },
      {
        'id': 8,
        'label': 'R$ 4,64 Starbucks',
        'date': '2016-10-25T12:31:16.062Z',
        'signal': '+',
        'status': 1,
        'value': '0,36'
      },
      {
        'id': 9,
        'label': 'R$ 4,64 Starbucks',
        'date': '2016-09-25T12:31:16.062Z',
        'signal': '+',
        'status': 1,
        'value': '0,36'
      },
      {
        'id': 10,
        'label': 'R$ 4,64 Starbucks',
        'date': '2016-09-25T12:31:16.062Z',
        'signal': '+',
        'status': 1,
        'value': '0,36'
      },
      {
        'id': 11,
        'label': 'R$ 4,64 Starbucks',
        'date': '2016-09-25T12:31:16.062Z',
        'signal': '+',
        'status': 1,
        'value': '0,36'
      }
    ];


  })

  .controller('creditoCtrl', function($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPopover) {
    $scope.Valor = 1;
    $scope.Formulario = 0;
    $scope.Meta = '5,00';
    $scope.Contatos =  [
      {
        'id': 1,
        'nome': 'Antonio Cezar',
        'fone': '(11) 99855-6658',
        'foto': 'img/avatar1.png'
      },
      {
        'id': 2,
        'nome': 'Debora Silva',
        'fone': '(11) 99855-6658',
        'foto': 'img/avatar2.png'
      },
      {
        'id': 3,
        'nome': 'Lucia Ka',
        'fone': '(11) 99855-6658',
        'foto': 'img/avatar3.png'
      },
      {
        'id': 4,
        'nome': 'Antonio Cezar',
        'fone': '(11) 99855-6658',
        'foto': 'img/avatar1.png'
      },
      {
        'id': 5,
        'nome': 'Debora Silva',
        'fone': '(11) 99855-6658',
        'foto': 'img/avatar2.png'
      },
      {
        'id': 6,
        'nome': 'Lucia Ka',
        'fone': '(11) 99855-6658',
        'foto': 'img/avatar3.png'
      }
    ];
    $scope.Contato = {};
    $scope.recomendarAmigo = function(id){

      $scope.Formulario = 1;

      $scope.Contato = $scope.Contatos[id];

    };
    $scope.recomendarEnviado = function(id){
      $scope.Formulario = 0;
      //$state.reload();
     // $state.go('app.ganhe-creditos');

    };
    $scope.recomendarEnviar = function(id){
      $scope.Formulario = 2;
      //$state.reload();
     // $state.go('app.ganhe-creditos');

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

    $scope.Investido = '1.325,14';

    $scope.Cursor = 0;

    $scope.movimento = 0;

    $scope.Autorizado = 0;

    $scope.movimentar = function(tipo) {

      $scope.movimento = tipo;

      if (tipo === 1){ // SACAR

        var investido = $scope.Investido,
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

          $scope.Investido = investido;

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

        var investido = $scope.Investido,
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

        $scope.Investido = investido;

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

      if(vlr.length < $scope.Investido.length){

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

  })

  .controller('dadosCtrl', function($scope, $ionicModal, $timeout, $state) {

    $scope.user = {
      pessoal : {
        nome : 'Marco Carvalho',
        fone : '(11)74857-9963',
        email : 'marcos@gmail.com',
        dob : '29-12-1983',
        cpf : '80140025048',
        sexo : 'M'
      },
      endereco : {
        rua : 'Av. Brasil, 335',
        cidade : 'São Paulo',
        cep : '01220-000',
        uf : 'SP',
        complemento : 'ap 35'
      },
      financeiro : {
        emprego : 'Estudante',
        bens : 'Menos de R$10 mil',
        tempo : 'Menos de 5 anos',
        motivo : 'Geral',
        ano : 'Menos de R$25 mil'
      },
      perfil : 1
    };

    console.log($scope.user);

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

  .controller('contasCtrl', function($stateParams, $scope, $ionicModal, $timeout, $state) {

    $scope.conta = $stateParams.id || null;

    $scope.bandeiras = [
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
    ];

    $scope.go = function (destino){

      $state.go(destino);

    };

    $scope.editarConta = function (index){

      console.log(index);

      $scope.conta = index;

      $state.go('app.adicionar-conta', {id: index});

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

    $scope.idade = 37;

    $scope.idadesimulada = $scope.idade + 10;

    $scope.valor = null;

    $scope.mensal = '10,00';

    $scope.eixoX = [];

    $scope.graphData = [];

    var i = $scope.idade,
        mensal = null,
        total = null,
        unidade = null,
        invLen = null;

    $scope.gerarDados = function (idade) {

      for ( i; i <= (idade + 13) ; i ++ ){

        if(!( i % 2)){

          $scope.eixoX.push(i);

        }

      }

      for ( i = 0; i < 7 ; i ++ ){

        mensal = $scope.mensal.replace(',','');

        $scope.graphData.push(i * parseFloat(mensal) * 0.0012);

      }

      console.log($scope.graphData);

      total = $scope.graphData.reduce(function(a, b){return a+b;}) * 10000;

      total = total.toString();

      unidade = total.substring(0, total.length - 2) || '0';

      invLen = total.length;

      if(unidade.length < 4){

        total = unidade + ',' + total.substring(invLen - 2, invLen);

      } else {

        total = total.substring(0, invLen - 5)+'.' + total.substring(invLen - 5, invLen - 2) + ',' + total.substring(invLen - 2, invLen);

      }

      $scope.valor = total;

    };

    $scope.gerarDados($scope.idade);

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

    $scope.atualizarGrafico = function () {

      $scope.gerarDados();

      $scope.perfilGrafico();

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

    $scope.go = function (destino){

      $state.go(destino);

    };



  });

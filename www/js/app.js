// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','chart.js' , 'starter.controllers' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('tour-app', {
    url: '/app-tour',
        templateUrl: 'templates/app-tour.html',
        controller: 'AppCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login/login.html',
    controller: 'loginCtrl'
  })
  .state('resetar-senha', {
    url: '/login/resetar-senha',
    templateUrl: 'templates/login/resetar-senha.html',
    controller: 'loginCtrl'
  })
  .state('sucesso-senha', {
    url: '/login/sucesso-resetar-senha',
    templateUrl: 'templates/login/sucesso-resetar-senha.html',
    controller: 'loginCtrl'
  })
  .state('pergunta-1', {
    url: '/perguntas-perfil-1',
    templateUrl: 'templates/perguntas/pergunta-1-dados.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-2', {
    url: '/perguntas-perfil-2',
    templateUrl: 'templates/perguntas/pergunta-2-endereco.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-3', {
    url: '/perguntas-perfil-3',
    templateUrl: 'templates/perguntas/pergunta-3-acesso.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-4', {
    url: '/perguntas-perfil-4',
    templateUrl: 'templates/perguntas/pergunta-4-preferencias.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-5', {
    url: '/perguntas-perfil-5',
    templateUrl: 'templates/perguntas/pergunta-5-receita.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-6', {
    url: '/perguntas-perfil-6',
    templateUrl: 'templates/perguntas/pergunta-6-patrimonio.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-7', {
    url: '/perguntas-perfil-7',
    templateUrl: 'templates/perguntas/pergunta-7-emprego.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-8', {
    url: '/perguntas-perfil-8',
    templateUrl: 'templates/perguntas/pergunta-8-investidor.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-9', {
    url: '/perguntas-perfil-9',
    templateUrl: 'templates/perguntas/pergunta-9-aplicaveis.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-10', {
    url: '/perguntas-perfil-10',
    templateUrl: 'templates/perguntas/pergunta-10-nascimento.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-11', {
    url: '/perguntas-perfil-11',
    templateUrl: 'templates/perguntas/pergunta-11-sugestao.html',
    controller: 'perfilCtrl'
  })

  .state('pergunta-12', {
    url: '/perguntas-perfil-12',
    templateUrl: 'templates/perguntas/pergunta-12-investir.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-13', {
    url: '/perguntas-perfil-13',
    templateUrl: 'templates/perguntas/pergunta-13-banco.html',
    controller: 'AppCtrl'
  })

  .state('pergunta-final', {
    url: '/perguntas-perfil-final',
    templateUrl: 'templates/perguntas/login-banco.html',
    controller: 'AppCtrl'
  })

  .state('bem-vindo', {
    url: '/bem-vindo-acorns',
    templateUrl: 'templates/perguntas/bem-vindo.html',
    controller: 'AppCtrl'
  })



  .state('app.configuracoes', {
    url: '/conf',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/configuracoes.html',
        controller: 'configuracoesCtrl'
      }
    }
  })
  .state('app.historico', {
    url: '/historico',
    views: {
      'menuContent': {
        templateUrl: 'templates/historico/historico.html',
        controller: 'saldoCtrl'
      }
    }
  })

  .state('app.arredondamentos', {
    url: '/conf/arredondamentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/arredondamento-cartoes/arredondamento.html',
        controller: 'contasCtrl'
      }
    }
  })
  .state('app.adicionar-conta', {
    url: '/conf/adicionar-conta/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/arredondamento-cartoes/adicionar-conta.html',
        controller: 'contasCtrl'
      }
    }
  })
  .state('app.preferencias', {
    url: '/conf/preferencias-do-sistema',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/preferencias-do-sistema/preferencias.html',
        controller: 'preferenciasCtrl'
      }
    }
  })

  .state('app.conta-bancaria', {
    url: '/conf/conta-bancaria',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/conta-bancaria/conta-bancaria.html',
        controller: 'conta-bancariaCtrl'
      }
    }
  })

  .state('app.notificacoes', {
    url: '/conf/notificacoes',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/notificacoes/notificacoes.html'
      }
    }
  })

  .state('app.dados-usuario', {
    url: '/conf/dados-perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/dados-usuario/dados-usuario.html',
        controller: 'dadosCtrl'
      }
    }
  })

  .state('app.seguranca', {
    url: '/conf/seguranca',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracoes/seguranca/seguranca.html',
        controller: 'dadosCtrl'
      }
    }
  })
  .state('app.ajuda', {
    url: '/ajuda',
    views: {
      'menuContent': {
        templateUrl: 'templates/ajuda/ajuda-main.html'
      }
    }
  })
  .state('app.faq', {
    url: '/ajuda/faq',
    views: {
      'menuContent': {
        templateUrl: 'templates/ajuda/faq/faq.html'
      }
    }
  })
  .state('app.suporte', {
    url: '/ajuda/suporte',
    views: {
      'menuContent': {
        templateUrl: 'templates/ajuda/suporte/suporte.html'
      }
    }
  })
  .state('app.ajuda-seguranca', {
    url: '/ajuda/seguranca',
    views: {
      'menuContent': {
        templateUrl: 'templates/ajuda/seguranca/ajuda-seguranca.html'
      }
    }
  })
  .state('app.legal', {
    url: '/legal',
    views: {
      'menuContent': {
        templateUrl: 'templates/legal/legal-main.html'
      }
    }
  })
  .state('app.contrato', {
    url: '/legal/contrato',
    views: {
      'menuContent': {
        templateUrl: 'templates/legal/contrato/contrato.html'
      }
    }
  })
  .state('app.divulgacao', {
    url: '/legal/divulgacao',
    views: {
      'menuContent': {
        templateUrl: 'templates/legal/divulgacao/divulgacao.html'
      }
    }
  })
  .state('app.politicas', {
    url: '/legal/politicas',
    views: {
      'menuContent': {
        templateUrl: 'templates/legal/politicas/politicas.html'
      }
    }
  })
  .state('app.termos', {
    url: '/legal/termos',
    views: {
      'menuContent': {
        templateUrl: 'templates/legal/termos/termos.html'
      }
    }
  })
    .state('app.perfil', {
      url: '/config/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/configuracoes/perfil/perfil.html',
          controller: 'perfilCtrl'
        }
      }
    })
    .state('app.perfil-sem-info', {
      url: '/config/perfil-vazio',
      views: {
        'menuContent': {
          templateUrl: 'templates/perfil-vazio.html',
          controller: 'perfilCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
    .state('app.home2', {
      url: '/home-sem-investimento',
      views: {
        'menuContent': {
          templateUrl: 'templates/home-sem-investimento.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.performance', {
      url: '/performance',
      views: {
        'menuContent': {
          templateUrl: 'templates/performance.html',
          controller: 'peformanceCtrl'
        }
      }
    })
    .state('app.movimentar-saldo', {
      url: '/movimentar-saldo',
      views: {
        'menuContent': {
          templateUrl: 'templates/movimentar-saldo.html',
          controller: 'saqueCtrl'
        }
      }
    })
    .state('app.ver-saldo', {
      url: '/ver-saldo',
      views: {
        'menuContent': {
          templateUrl: 'templates/ver-saldo.html',
          controller: 'saldoCtrl'
        }
      }
    })
    .state('app.ganhe-creditos', {
      url: '/ganhe-creditos',
      views: {
        'menuContent': {
          templateUrl: 'templates/ganhe-creditos.html',
          controller: 'creditoCtrl'
        }
      }
    })
    .state('app.investimento-programado', {
      url: '/conf/investimento-programado',
      views: {
        'menuContent': {
          templateUrl: 'templates/configuracoes/investimento-programado/investimento-programado.html',
          controller: 'programadoCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

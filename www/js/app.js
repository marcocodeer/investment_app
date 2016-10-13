// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','chart.js' ,'chart.js' , 'starter.controllers' ])

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

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
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
    controller: 'AppCtrl'
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

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.tudo-tab', {
    url: '/all',
    views: {
      'menuContent': {
        templateUrl: 'templates/tudo-tab.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/perfil.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.movimentar-saldo', {
      url: '/movimentar-saldo',
      views: {
        'menuContent': {
          templateUrl: 'templates/movimentar-saldo.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.ver-saldo', {
      url: '/ver-saldo',
      views: {
        'menuContent': {
          templateUrl: 'templates/ver-saldo.html',
          controller: 'AppCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/perguntas-perfil-1');
});

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('clownCar.payment', {
    url: '/payment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/payment.html',
        controller: 'paymentCtrl'
      }
    }
  })

  .state('clownCar.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('clownCar.profile', {
    url: '/profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('clownCar.rideHistory', {
    url: '/history',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rideHistory.html',
        controller: 'rideHistoryCtrl'
      }
    }
  })

  .state('clownCar', {
    url: '/main',
    templateUrl: 'templates/clownCar.html',
    controller: 'clownCarCtrl'
  })

  .state('clownCar.ride', {
    url: '/ride',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ride.html',
        controller: 'rideCtrl'
      }
    }
  })

  .state('clownCar.editAccount', {
    url: '/edit',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editAccount.html',
        controller: 'editAccountCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/main/ride')

  

});
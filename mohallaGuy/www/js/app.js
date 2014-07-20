// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova.plugins.geolocation'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('services', {
        url: '/services',
        controller: 'ListCtrl',
        //abstract: true,
        templateUrl: 'templates/service-list.html'
    })
    
    .state('service', {
        url: '/:service',
        controller: 'SelectCtrl',
        templateUrl: 'templates/service-men-list.html'
    });

   /* .state('home.list', {
        url: '/home/list',
        views: {
            'home-list': {
                templateUrl: 'templates/home-list.html',
                controller: 'ListCtrl'
            }
        }
    })

    .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'templates/main.html'
    })

    .state('main.select', {
        url: '/main/select',
        views: {
            'main-select': {
                templateUrl: 'templates/main-select.html',
                controller: 'SelectCtrl'
            }
        }
    });*/

    // setup an abstract state for the tabs directive
    /*.state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })*/

    // Each tab has its own nav history stack:

    /*.state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

    .state('tab.geo-location', {
        url: '/geolocation',
        views: {
            'tab-geoLocation': {
                templateUrl: 'templates/tab-geo-location.html',
                controller: 'LocationCtrl'
            }
        }
    });*/

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/services');

});


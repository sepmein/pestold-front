'use strict';

angular.module('pestoldFront', ['ngAnimate', 'ngStorage', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/auth', {
        templateUrl: 'app/auth/auth.html',
        controller: 'AuthCtrl'
      })
      .when('/signup', {
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;

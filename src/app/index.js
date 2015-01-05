'use strict';

angular.module('pestoldFront', ['ngAnimate', 'ngStorage', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'Vec'])
  .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      //.when('/dashboard')
      .when('/auth', {
        templateUrl: 'app/auth/auth.html',
        controller: 'AuthCtrl'
      })
      .when('/signup', {
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/vec', {
        templateUrl: 'app/vec/vec.html',
        controller: 'VecCtrl'
      })
      .when('/vec/start', {
        templateUrl: 'app/vec/start/vec.start.html',
        controller: 'VecStartCtrl'
      })
      .when('/vec/recipe/:id', {
        templateUrl: 'app/vec/recipe/vec.recipe.html',
        controller: 'VecRecipeCtrl'
      })
      //.when('/vec/recipe/all')
      //.when('/vec/recipe/my')
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.interceptors.push('bearTokenInterceptor');
  }])
;

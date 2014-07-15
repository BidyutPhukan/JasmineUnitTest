'use strict';

/**
 * @ngdoc overview
 * @name yodemoApp
 * @description
 * # yodemoApp
 *
 * Main module of the application.
 */
angular
  .module('yodemoApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

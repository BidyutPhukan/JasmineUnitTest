'use strict';

/**
 * @ngdoc function
 * @name yodemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yodemoApp
 */
angular.module('yodemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

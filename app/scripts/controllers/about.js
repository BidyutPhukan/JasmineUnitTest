'use strict';

/**
 * @ngdoc function
 * @name yodemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yodemoApp
 */
angular.module('yodemoApp')
  .controller('AboutCtrl', function ($scope) {

    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
*/

    $scope.developedBy = 'Google';
    $scope.latestVersion = '1.0.08';

    $scope.updateDevelopedBy = function(developer)
    {
      $scope.developedBy = developer;
    };

    $scope.updateVersion = function(version)
    {
      $scope.latestVersion = version;
    };
  });

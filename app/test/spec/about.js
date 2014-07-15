'use strict';

describe('AboutCtrlTestSuite', function () {

  var $scope, ctrl, $timeout;

  beforeEach(function (){

    // load the module you're testing.
    module('yodemoApp');

    // INJECT! This part is critical
    // $rootScope - injected to create a new $scope instance.
    // $controller - injected to create an instance of our controller.
    // $q - injected so we can create promises for our mocks.
    // _$timeout_ - injected to we can flush unresolved promises.
    inject(function($rootScope, $controller) {
      // create a scope object for us to use.
      $scope = $rootScope.$new();

      // now run that scope through the controller function,
      // injecting any services or other injectables we need.
      // **NOTE**: this is the only time the controller function
      // will be run, so anything that occurs inside of that
      // will already be done before the first spec.
      ctrl = $controller('AboutCtrl', {
        $scope: $scope
      });
    });
  });

  it('should attach a list of awesomeThings to the scope', function () {
    expect($scope.awesomeThings.length).toBe(3);
  });

  it('should start with foo and bar populated', function() {

    //just assert. $$scope was set up in beforeEach() (above)
    expect($scope.developedBy).toEqual('Google');
    expect($scope.latestVersion).toEqual('1.0.08');
  });

  it('should update the developer name', function(){
    $scope.updateDevelopedBy('microsoft');

    expect($scope.developedBy).toEqual('microsoft');
  });

  it('should update the product version', function(){
    $scope.updateVersion('007');

    expect($scope.latestVersion).toEqual('007');
  });
});

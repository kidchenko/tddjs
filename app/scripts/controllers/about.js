'use strict';

/**
 * @ngdoc function
 * @name karmaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the karmaApp
 */
angular.module('karmaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
  });

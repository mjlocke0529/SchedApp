(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.calendar')
    .controller('CalendarController', CalendarController);

  CalendarController.$inject = ['$scope', 'Global', 'Calendar'];

  function CalendarController($scope, Global, Calendar) {
    $scope.global = Global;
    $scope.eventSources = [];
    $scope.package = {
      name: 'Calendar'
    };
  }
})();
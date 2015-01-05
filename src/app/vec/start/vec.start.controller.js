/**
 * Created by Spencer on 15/1/5.
 */
'use strict';

angular.module('Vec').controller('VecStartCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $scope.submitRequest = function () {
      var data = {
        concentrationRaw: {
          data: $scope.concentrationRaw
        },
        concentrationHigh: {
          data: $scope.concentrationHigh,
          unit: $scope.concentrationHighUnit
        },
        propotionRate: $scope.propotionRate,
        groupNumber: $scope.groupNumber,
        dose: {
          data: $scope.dose,
          unit: $scope.doseUnit
        },
        method: '等差配比',
        description: $scope.description,
        originalMedicine: $scope.originalMedicine
      };
      $http.post('http://localhost:4000/vec/recipe', {recipe: data})
        .success(function (data, status, headers, config) {
          console.log('success');
        })
        .error(function (data, status, headers, config) {
          console.log(data.message);
        });
    }
  }]);

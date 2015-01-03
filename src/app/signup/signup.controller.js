/**
 * Created by Spencer on 14/12/30.
 */
'use strict';

angular.module('pestoldFront').controller('SignupCtrl',
  ['$scope', '$http','$localStorage','$location', function ($scope, $http, $localStorage, $location) {
    $scope.auth = function () {
      $http.post('http://localhost:4000/signup', {
        userName: $scope.userName,
        password: $scope.password
      }).success(function (data, status, headers, config) {
        console.log(data);
        $scope.errorMessage = null;
        $localStorage.token = data;
        $location.path('/');
      }).error(function (data, status, headers, config) {
        $scope.errorMessage = data.message;
      })
    }
  }]);

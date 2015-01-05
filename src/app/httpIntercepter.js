/**
 * Created by Spencer on 15/1/5.
 */

'use strict';

angular.module('pestoldFront').factory('bearTokenInterceptor', ['$localStorage', function ($localStorage) {
  return {
    'request': function (config) {
      if ($localStorage.token) {
        config.headers.Authorization = 'Bearer ' + $localStorage.token;
      }
      return config;
    }
  }
}]);

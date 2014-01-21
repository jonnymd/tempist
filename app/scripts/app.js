'use strict';

angular.module('tempistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dentist', {
        templateUrl: 'views/dentistprofile.html',
        controller: 'DentistProfileCtrl'
      })
      .when('/temp', {
        templateUrl: 'views/tempprofile.html',
        controller: 'DentistProfileCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'DentistProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var app = angular.module('trainingapp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'trainingapp.directives', 'trainingapp.controllers']);
angular.module('trainingapp.controllers', []);
angular.module('trainingapp.directives', []);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.tpl.html',
      controller: 'main'
    })
    .when('/about', {
      templateUrl: 'app/about/about.tpl.html',
      controller: 'about'
    })
    .otherwise({ redirectTo: '/' });
});

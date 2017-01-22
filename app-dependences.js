'use strict';

angular.module('pagina',['ngRoute'])
.config(function($routeProvider,$locationProvider) {
	$routeProvider
	.when('/',{
		templateUrl : "templates/home.html",
		controller : "homeController"
	})
	.when('/quienesSomos',{
		templateUrl : "templates/quienesSomos.html",
		controller : "quienesSomosController"
	})
	.when('/servicios',{
		templateUrl : "templates/servicios.html",
		controller : "serviciosController"
	})
	.when('/aprendiendoBoot',{
		templateUrl:'templates/boots.html',
	})
	.when('/aprendiendoBoot',{
		templateUrl:'templates/formsBoot.html',
	})
	.otherwise('templates/boots.html');


	$locationProvider.html5Mode(false);

});
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
	}).otherwise('templates/home.html');


	$locationProvider.html5Mode(false);

});
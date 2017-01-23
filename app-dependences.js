'use strict';

angular.module('pagina',['ngRoute','ngAnimate'])
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
		templateUrl:'templates/imagenes.html',
		controller:'ControlX'
	})
	.when('/aprendiendoAngular',{
		templateUrl:'templates/Angular/angularAnimate.html',
		controller:'angularAnimate'
	})
	.otherwise('templates/boots.html');


	$locationProvider.html5Mode(false);

});
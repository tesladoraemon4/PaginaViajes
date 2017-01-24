'use strict';

angular.module('pagina',['ngRoute','ngAnimate','agregarBoton'])
.config(function($routeProvider,$locationProvider) {




	//consultamos las rutas
	
	for (var i=0;i<localStorage.length;i++) {
		var ruta = localStorage.key(i);
		var nombre = localStorage.getItem(x);
		$routeProvider
		.when('/'+nombre,
			{
			templateUrl:ruta,
			controller:'ControlX'
		});

	}





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
	.when('/agregarRuta',{
		templateUrl:'agregar-boton/formularioRutas.html',
		controller:'formRutas'
	}).otherwise('templates/boots.html');


/*

	.when('/aprendiendoBoot',{
		templateUrl:'templates/botonMenu.html',
		controller:'ControlX'
	})
	.when('/aprendiendoAngular',{
		templateUrl:'templates/Angular/angularAnimate.html',
		controller:'angularAnimate'
	})

*/
	$locationProvider.html5Mode(false);

});
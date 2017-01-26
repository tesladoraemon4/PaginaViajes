'use strict';


angular.module('pagina',['ngRoute','ngAnimate','agregarBoton','ui.router'])
.config(function($urlRouterProvider,$stateProvider) {

	$urlRouterProvider.otherwise("/");
	
	for (var i=0;i<localStorage.length;i++) {
		var ruta = localStorage.key(i);
		var nombre = localStorage.getItem(ruta);
		$stateProvider
		.state(nombre,
			{
			url:'/'+nombre,
			templateUrl:ruta,
			controller:'ControlX'
		});

	}
	
	$stateProvider
	.state('/',{
		url:'/',
		templateUrl : "templates/home.html",
		controller : "homeController"
	})
	.state('quienesSomos',{
		url:'/quienesSomos',
		templateUrl : "templates/quienesSomos.html"
	})
	.state('servicios',{
		url:'/servicios',
		templateUrl : "templates/servicios.html"
	})
	.state('agregarRuta',{
		url:'/agregarRuta',
		templateUrl:'agregar-boton/formularioRutas.html',
		controller:'formRutas'
	});


/*

	.state('/aprendiendoBoot',{
		templateUrl:'templates/botonMenu.html',
		controller:'ControlX'
	})
	.state('/aprendiendoAngular',{
		templateUrl:'templates/Angular/angularAnimate.html',
		controller:'angularAnimate'
	})

*/

});
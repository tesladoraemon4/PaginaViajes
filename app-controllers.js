'use strict';


angular.module('pagina')
.controller('homeController', function($scope,$routeParams){
	$scope.hola="jsdlhfgsjd";
})
.controller('ControlX', function($scope,$routeParams,$q){



	/*
	EJEMPLO CON LA FUNCION $q

	function asyncGreet(name) {
	  var deferred = $q.defer();//aplazaar o pendiente

	  setTimeout(function() {
	  	//notificar
	    deferred.notify('About to greet ' + name + '.');

	    if (true) {
	    	//resolver
	      deferred.resolve('Hello, ' + name + '!');
	    } else {//rechazar
	      deferred.reject('Greeting ' + name + ' is not allowed.');
	    }
	  }, 1000);

	  return deferred.promise;//sE CREA UNa primise
	}

	var promise = asyncGreet('Robin Hood');
	promise.then(function(greeting) {//cuando la funcion asincrona ser ejecuta =)
	  alert('Success: ' + greeting);
	}, function(reason) {// =(
	  alert('Failed: ' + reason);
	}, function(update) {//cuando se actualiza
	  alert('Got notification: ' + update);
	});

	*/




})
.controller('angularAnimate',function ($scope) {






	

});


/*
.controller('serviciosController', function ($scope,$routeParams) {

});

*/
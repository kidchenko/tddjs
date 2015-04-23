'use strict';

/**
 * @ngdoc function
 * @name karmaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karmaApp
 */
angular.module('karmaApp')
  .controller('CurrencyCtrl', function ($scope) {
    $scope.resultado = "";
    $scope.moedaDestino = "USD";
    $scope.valorIOF = 0.35;
    $scope.valorTaxaOperacao = 0.09;
    $scope.moedasDestino = [
	    {
	    	padrao : "USD",
	    	cotacao : 3.04
	    },{
	    	padrao : "EUR",
	    	cotacao : 3.25
	    },{
	    	padrao : "ARS",
	    	cotacao : 0.35
	    },{
	    	padrao : "CNY",
	    	cotacao : 0.49
	    }
	];
    $scope.validarEntrada = function(value) {
    	return !isNaN(value);
    };
    $scope.validarCotacao = function() {
    	return true;
    };
    $scope.converter = function(valor, destino) {
    	return 0.49;
    };
    $scope.buscarTaxa = function(moeda) {
    	return 0.018;
    };

  });

'use strict';

describe('Controller: CurrencyCtrl', function () {

  // load the controller's module
  beforeEach(module('karmaApp'));

  var CurrencyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrencyCtrl = $controller('CurrencyCtrl', {
      $scope: scope
    });
  }));

  it('deve inicializar com resultado vazio', function () {
    expect(scope.resultado).toBe("");
  });

  it('deve ter Dolar como moeda destino padrão', function () {
    expect(scope.moedaDestino).toBe("USD");
  });

  it('deve inicializar taxa de IOF', function () {
    expect(scope.valorIOF).toBe(0.35);
  });

  it('deve incializar taxa de padrao de operadora', function () {
    expect(scope.valorTaxaOperacao).toBe(0.09);
  });

  it('deve ter uma lista de moedas destino', function () {
    expect(scope.moedasDestino.length).toBe(4); 
  });
  
  it('deve validar entrada de valor de origem', function() {
    expect(scope.validarEntrada(444)).toBe(true);
  });
  
  it('deve validar entrada inválida de valor de origem', function() {
    expect(scope.validarEntrada("bãnãna")).toBe(false);
  });

  it('deve obter informacoes validas de cotacao', function(){
    expect(scope.validarCotacao()).toBe(true);
  });

  it('deve obter os valores de 4 cotacoes', function(){
    expect(scope.moedasDestino.length).toBe(4);
  });

  it('deve converter R$1,00 para CNY', function() {
    var cotacaoCny = 0.49;
    expect(scope.converter(1.0, "CNY")).toBe(cotacaoCny);
  });
  it('deve verificar taxa de operacao pra CNY', function() {
    var taxaCny = 0.018;
    expect(scope.buscarTaxa("CNY")).toBe(taxaCny);
  });
  xit('deve verificar taxa de operacao geral');



});

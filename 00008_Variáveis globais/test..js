describe("", function() {
  it("elevadorSobrecarregado(4) com pesoMedioPesoaEmQilogramas = 70", function() {
    pesoMedioPesoaEmQilogramas = 70;
    assert(!elevadorSobrecarregado(4))
  })
  it("elevadorSobrecarregado(4) com pesoMedioPesoaEmQilogramas = 80", function() {
    pesoMedioPesoaEmQilogramas = 80;
    assert(elevadorSobrecarregado(4))
  })
  it("elevadorSobrecarregado(2) com pesoMedioPesoaEmQilogramas = 80", function() {
    pesoMedioPesoaEmQilogramas = 80;
    assert(!elevadorSobrecarregado(2))
  })
  it("elevadorSobrecarregado(5) com pesoMedioPesoaEmQilogramas = 80", function() {
    pesoMedioPesoaEmQilogramas = 80;
    assert(elevadorSobrecarregado(5))
  })
})
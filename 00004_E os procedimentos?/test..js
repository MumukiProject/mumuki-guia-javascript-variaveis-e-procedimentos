describe("linhas", function() {
  it("deve imprimir as linhas", function() {
    linhasAquarelaDoBrasil()
    assert.equal(fakeConsole.toString(), "Brasil, meu Brasil Brasileiro,\nMeu mulato inzoneiro,\nVou cantar-te nos meus versos:\nO Brasil, samba que dá\nBamboleio, que faz gingar;\nO Brasil do meu amor,\nTerra de Nosso Senhor.\n")
  });
  it("não devia devolver nada", function() {
    assert(linhasAquarelaDoBrasil() === undefined);
  });

})

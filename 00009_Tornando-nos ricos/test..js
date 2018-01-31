describe("", function() {
  it("o aumentarFortuna duplica a variável global reaisNaMinhaCarteira", function () {
    reaisNaMinhaCarteira = 100;
    aumentarFortuna();
    assert.equal(reaisNaMinhaCarteira, 200);
  });

  it("o aumentarFortuna pode ser chamado várias vezes", function () {
    reaisNaMinhaCarteira = 30;
    aumentarFortuna();
    aumentarFortuna();
    aumentarFortuna();
    assert.equal(reaisNaMinhaCarteira, 240);
  });

})
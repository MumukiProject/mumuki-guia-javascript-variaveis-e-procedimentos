var fakeConsole = {
  lines: [],
  log: function(line) {
    this.lines.push(line + "\n");
    console.log(line);
  },
  toString: function() {
    return String.prototype.concat.apply([], this.lines);
  }
};

function longitude(secuencia) {
  return secuencia.length; 
}
function faixa(s, e) {
  let r = [];
  for (let i = s; i <= e; i++) {
     r.push(i)
  }
  return r;
}

function imprimir(s) {
  fakeConsole.log(s)
}

function colocar(a, e) {
   array.push(e);
}
Surpresa! Podemos declarar variáveis tanto diretamente no programa como dentro de uma `function`:

``` javascript
function contaLouca(umNumero) {
  let oDobro = umNumero * 2;
  if (oDobro > 10) {
    return oDobro;
  } else {
    return 0;
  }
}
```

As variáveis declaradas dentro de uma `function`, conhecidas como _variáveis locais_, não apresentam maior mistério. No entanto, devemos ter especial cuidado: elas só podem ser usadas dentro da `function` em questão. Se eu quiser referencia-la em um programa:

``` javascript
let oQuadruplo = oDobro * 4;
```

Kaboom, ela vai quebrar! :collision:

No entanto, as variáveis declaradas diretamente no programa, conhecidas como _variáveis globais_, podem ser usadas a partir de qualquer `function`. Por exemplo:

``` javascript
let pesoMaximoBagagemEmGramas = 5000;
 
function podeLevar(pesoBagagem) {
  return pesoBagagem <= pesoMaximoBagagemEmGramas;
}
```

> Vamos ver se você vai entendendo: escreva uma função `elevadorSobrecarregado`, que pega um número de pessoas e diz se todas elas excedem a carga máxima do elevador.
 
> Tenha em mente que estima-se que a carga máxima do elevador é de 300kg e que o peso médio por pessoa é uma variável global: `pesoMedioPesoaEmQilogramas`.

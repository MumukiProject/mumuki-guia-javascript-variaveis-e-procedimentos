Chegou a vez de outra estrutura de controle de fluxo: a repetição simples. E se você não lembrar, era algo como o seguinte...

``` gobstones
program {
  repeat(4) {
    //...fazer algo...
  }
}
```

... isso nos permite repetir uma tarefa várias vezes. Em JavaScript, também temos uma estrutura similar: o `for`.

Por exemplo, se quiséssemos jogar os dados 4 vezes e imprimir o resultado, poderíamos escrever o seguinte:

``` javascript
for(let numero of faixa(1, 4)) {
   imprimir("Saiu o " + jogarDado())
}
```

> Escreva um programa que desenhe um "quadrado" de asteriscos de 4 por 4:

> ``` 
> ****
> ****
> ****
> ****
> ```

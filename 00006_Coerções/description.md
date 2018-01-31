Voltemos um momento ao código anterior. Você percebe algo estranho nesta expressão?

``` javascript
"A primeira jogada deu " + primeiraJogada
```

Usamos o operador `+` de uma maneira diferente, operando um string e um número, e o que ele fez foi concatenar o string com a representação textual do número. Quer dizer que:

* se operarmos dois números com `+`, eles somam
* se operarmos dois strings com `+`, elas são concatenados 
* se operarmos um string e um número `+`, se torna _implicitamente_ o número em string e, logo depois, se concatenam, como antes

Em JavaScript, estas conversões implícitas, também chamadas de _coerções_, acontecem muito. 

_Talvez até [mais do que gostaríamos](https://archive.org/details/wat_destroyallsoftware)!_ :sweat:

> Vamos ver se você vai entendendo, escreve uma função `elefantesEquilibristas`, que pegue um número de elefantes e devolva uma rima de uma música bem conhecida:

> ``` javascript
> ム elefantesEquilibristas(3)
> "3 elefantes se balançavam"
> ム elefantesEquilibristas(462)
> "462 elefantes se balançavam"
> ```


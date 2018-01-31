Agora, além poder consultar o resultado de uma tarefa através do console, também aprendemos anteriormente que os programas têm um ponto de entrada: o `program`. Onde ficou?

A resposta é tão simples como surpreendente: em JavaScript, tudo o que escrevemos fora de uma `function` será, implicitamente, o ponto de entrada. Por exemplo, se quermos um programa que imprima por tela o clássico `"Olá, mundo!"`, o podemos escrever assim:

``` javascript
imprimir("Olá, mundo!");
```

Ou se queremos um programa que jogue três vezes os dados e imprima seus resultados, podemos escrevê-lo assim:

``` javascript
imprimir("Jogando dados");
 
let primeiraJogada = jogarDado();
let segundaJogada = jogarDado();
let terceiraJogada = jogarDado();
 
imprimir("A primeira jogada deu " + primeiraJogada);
imprimir("A segunda jogada deu " + segundaJogada); 
imprimir("A terceira jogada deu " + terceiraJogada);
```

> Escreva e envie este programa.

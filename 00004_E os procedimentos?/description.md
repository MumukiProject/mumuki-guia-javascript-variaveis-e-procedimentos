No exercício anterior, você criou uma `function` que foi executada com o único objetivo de imprimir na tela. E por isso, tivemos que devolver qualquer valor. Não cheira mal?

Além disso, lembremos: quando queremos reutilizar o código, poderemos declarar:

* _funções_, que sempre devolvem algo e não produzem efeito.
* _procedimentos_, que não devolvem nada, e produzem efeitos.

Então, `linhasAquarelaDoBrasil` , não é uma função... mas um procedimento! Como se declaram os procedimentos em JavaScript?

Do mesmo jeito que as funções!: Usando a  palavra-chave: `function`.

``` javascript
function linhasAquarelaDoBrasil() {
    imprimir("Brasil, meu Brasil Brasileiro,");
    imprimir("Meu mulato inzoneiro,");
    imprimir("Vou cantar-te nos meus versos:");
    imprimir("O Brasil, samba que dá");
    imprimir("Bamboleio, que faz gingar;");
    imprimir("O Brasil do meu amor,");
    imprimir("Terra de Nosso Senhor.");
}
```

> Envie esta nova versão de `linhasAquarelaDoBrasil`

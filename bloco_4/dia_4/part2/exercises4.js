//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .
function maiorPalavra(palavras) {
    let maiorPalavra = palavras [0];
    for(let indice in palavras){
        if(maiorPalavra.lenght < palavras[indice].lenght){
            maiorPalavra = [indice];
        }
    }

return maiorPalavra;

}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
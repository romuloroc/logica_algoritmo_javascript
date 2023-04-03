// const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];

// for(let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i],i)
// }

const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];

nomes.forEach(function(nome, i) {
     console.log(nome, i)
})

function nossoForEach(arr, funcao) {
    for(let i = 0; i < arr.length; i++) {
        const intemDoArray = arr[i]
        funcao(intemDoArray, i)
    }
}

nossoForEach(nomes, function(nome, i){
    console.log(nome, i)
})
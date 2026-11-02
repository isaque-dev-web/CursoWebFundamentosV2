// Função para calcular a média de valores passados como argumentos
function calcularMedia(){
    if(arguments.length === 0){
        return 0; // retorna 0 caso não haja valores para calcular a média
    }

    // console.log(arguments) // imprime os valores passados como argumentos
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== 'number'){ // verifica se o valor passado como argumento é um número
            throw new Error("Todos os valores têm que ser números") // lança um erro caso algum valor não seja um número
        }
        total += arguments[i]
    }
    return total / arguments.length;
}
console.log(calcularMedia()) // retorna 0 caso não haja valores para calcular a média

console.log(calcularMedia(2, 6)) // retorna 4, que é a média de 2 e 6

console.log(calcularMedia(2, 6, 1, 1, 2, 6)) // retorna 3, que é a média de 2, 6, 1, 1, 2 e 6

console.log(calcularMedia("2", "6")) // lança um erro caso algum valor não seja um número
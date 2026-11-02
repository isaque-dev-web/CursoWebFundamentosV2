// Funções são tratadas como objetos de primeira classe em JavaScript
function fn(cb){
    console.log('Executar ação de callback') // executa a função fn
    console.log(typeof cb) // typeof cb === "function" // verifica se cb é uma função
    typeof cb === "function" && cb() // cb() // executa a função cb
}

// Exemplo de uso da função fn passando uma função nomeada como parâmetro
function callback(){
    console.log("função passada por parametro")
}
fn(callback) // chamando a função fn passando a função callback como parâmetro


// Exemplo de uso da função fn passando uma função anônima como parâmetro
// fn(function(){
//     console.log("função passada por parametro")
// })

// Exemplo de uso da função fn passando uma arrow function como parâmetro
const obj = {
    callback
}
obj.callback() // chamando a função callback que está dentro do objeto obj


function fn2(n1){
    return function(n2){
        return n1 * n2
    }
}

const funcao2 = fn2(10) // chamando a função fn2 passando o valor 10 como parâmetro e armazenando o retorno em funcao2
const mult = funcao2(2) // chamando a função funcao2 passando o valor 2 como parâmetro e armazenando o retorno em mult
console.log(mult) // imprimindo o valor de mult que é 20

// Exemplo de função que retorna outra função
function fn3(){
    fn3.count++ // incrementando a propriedade count da função fn3
    return function _fn3(){ // função anônima retornada por fn3
        console.log("funcção retornada por parametro") // imprimindo a mensagem "funcção retornada por parametro"
    }
}
fn3.count = 0 // adicionando uma propriedade count à função fn3

const funcao3 = fn3() // chamando a função fn3 e armazenando o retorno em funcao3
const funcao3a = fn3() // chamando a função fn3 e armazenando o retorno em funcao3
const funcao3b = fn3() // chamando a função fn3 e armazenando o retorno em funcao3
funcao3() // chamando a função funcao3 que é a função retornada por fn3
console.log(fn3.count) // imprimindo o valor da propriedade count da função fn3 que é 3
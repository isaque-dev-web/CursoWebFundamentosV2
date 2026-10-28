// function somar(){
//     console.log(arguments)
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     return total
// }

// const somar = function (){
//     console.log(arguments)
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     return total
// }


function somar() {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(somar.name) // retorna o nome da função
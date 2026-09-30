// "use strict" deixa o JavaScript mais seguro, evitando alguns erros comuns.
y = 10;

function foo() {
    "use strict";
    let x = 20
}
foo()
console.log(y)

function dobrar(n1, n1){
    "use strict";
    console.log(n1, n1)
    return n1 * 2 //n1 * n1
}
console.log(dobrar(5))

function Teste(){
    "use strict"
    console.log(this)
    this.a = "a"
}
Teste()
function calcularAreaRetangulo(l, a) {
    if (typeof l !== "number" || typeof a !== "number") {
        throw new Error("calcularAreaRetangulo aceita dois parâmetros do tipo number")
        alert("nunca nem vi")
    }
    return l * a
}

function calcularAreaTriangulo(b, a) {
    if (typeof b !== "number" || typeof a !== "number") {
        throw new Error("calcularAreaTriangulo aceita dois parâmetros do tipo number")
        alert("nunca nem vi")
    }
    return (b * a) / 2
}

function calcularAreaCirculo(r){
    if(typeof r !== "number") {
        throw new Error("calcularAreaCirculo: raio precisa ser number")
    }

    return Math.PI * r**2
}
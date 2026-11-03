// Função para calcular o IMC (Índice de Massa Corporal)
function calcularIMC(peso, altura){
    
    // Verifica se os parâmetros são números
    if (typeof peso !== "number" || typeof altura !== "number"){
        // Lança um erro caso algum valor não seja um número
        throw new Error("Apenas números")
    }

    // Calcula o IMC usando a fórmula: peso / (altura * altura)
    let imc = peso / (altura * altura);
    return imc; // Retorna o valor do IMC calculado
}

function classificarIMC(imc){
    // Função para classificar o IMC de acordo com a tabela de faixas
    // As faixas são testadas em ordem: cada uma só precisa do limite onde a próxima começa

    if (typeof imc !== "number"){
        throw new Error("Apenas números") // lança um erro caso o valor passado como argumento não seja um número
    }

    if (imc < 17){
        return "Muito abaixo do peso"; // Classificação para IMC menor que 17
    } else if (imc < 18.5){
        return "Abaixo do peso"; // Classificação para IMC de 17 até menos de 18.5
    } else if (imc < 25){
        return "Peso normal"; // Classificação para IMC de 18.5 até menos de 25
    } else if (imc < 30 ){
        return "Acima do peso"; // Classificação para IMC de 25 até menos de 30
    } else if (imc < 35){
        return "Obesidade grau 1"; // Classificação para IMC de 30 até menos de 35
    } else if (imc <= 40){
        return "Obesidade grau 2"; // Classificação para IMC de 35 até 40 (inclui o 40)
    } else {
        return "Obesidade grau 3"; // Classificação para IMC maior que 40
    }
}

console.log(classificarIMC(22.857142857142858)) // retorna "Peso normal" (IMC de uma pessoa com 70 kg e 1,75 m)

console.log(classificarIMC(35)) // retorna "Obesidade grau 2" (o 35 é o início dessa faixa)
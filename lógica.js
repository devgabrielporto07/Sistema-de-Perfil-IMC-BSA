// Sistema de Análise de Perfil com Interface em Terminal (Python) usando IMC e BSA
// Indice de Massa Corporal (IMC)
// Área da Superfície Corporal (BSA)
// Convertido de Python para JavaScript

// Cores usando estilos CSS ao invés de códigos ANSI
const cores = {
    verde: "#1ac71a",
    vermelho: "#e74c3c",
    magenta: "#2c3e50",
    amarelo: "#f39c12",
    ciano: "#1abc9c",
    reset: "inherit"
};

// Referência do formulário
const formPerfil = document.getElementById("formPerfil");
const resultados = document.getElementById("resultados");

// Bloquear notação científica nos inputs de altura e peso
const inputsNumericos = document.querySelectorAll('#altura, #peso, #age');
inputsNumericos.forEach(input => {
    input.addEventListener('keypress', function(event) {
        // Bloquear apenas a letra 'e' ou 'E' quando pressionada
        if (event.key.toLowerCase() === 'e') {
            event.preventDefault();
        }
    });
});

// Event listener para o envio do formulário
formPerfil.addEventListener("submit", function(event) {
    event.preventDefault();
    analisarPerfil();
});

// Função principal de análise do perfil
function analisarPerfil() {
    // Variáveis usando os tipos primitivos junto com a entrada dos dados para o usuário
    const nameuser = document.getElementById("nameuser").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const separado = nameuser.split(" ");
    const alturacm = altura * 100;

    // Variáveis para o cálculo e análise das condições
    // Ordem de Precedência mais os Operadores Aritméticos
    const imc = peso / (altura ** 2);
    const bsa = Math.sqrt((alturacm * peso) / 3600);

    // A saída dos dados junto com a exibição na tela
    document.getElementById("saudacao").textContent = `Prazer em te conhecer ${nameuser}!`;
    document.getElementById("idade").textContent = `Você tem ${age} anos`;
    document.getElementById("altura").textContent = `Você tem ${altura.toFixed(2)} metros`;
    document.getElementById("peso").textContent = `Você pesa ${peso} quilos`;

    // Análise de nome em maiúsculo e minúsculo
    document.getElementById("maiuscula").textContent = `O seu nome em maiúsculo: ${nameuser.toUpperCase()}`;
    document.getElementById("minuscula").textContent = `O seu nome em minúsculo: ${nameuser.toLowerCase()}`;

    // Fatiamento das Strings junto com o conceito de indexação
    const totalLetras = nameuser.length - (nameuser.split(" ").length - 1);
    document.getElementById("totalLetras").textContent = `A quantidade de letras em seu nome é igual a ${totalLetras} letras`;
    document.getElementById("primeiroNome").textContent = `Seu primeiro nome é ${separado[0]} e ele tem ${separado[0].length} letras`;

    document.getElementById("tresLetras").textContent = `As 3 primeiras letras do seu nome é => ${nameuser.substring(0, 3)}`;
    document.getElementById("quatroUltimas").textContent = `As 4 últimas letras dos nomes é => ${nameuser.substring(nameuser.length - 4)}`;

    // Condicionais para classificação de IMC
    let classificacao = "";
    let cor = "";

    if (imc < 18.5) {
        classificacao = "Baixo Peso";
        cor = cores.vermelho;
    } else if (imc > 18.5 && imc < 24.99) {
        classificacao = "Peso Normal";
        cor = cores.verde;
    } else if (imc > 24.99 && imc < 29.99) {
        classificacao = "Sobrepeso";
        cor = cores.amarelo;
    } else if (imc > 29.99 && imc < 34.9) {
        classificacao = "Obesidade Grau I";
        cor = cores.vermelho;
    } else if (imc > 34.9 && imc < 39.9) {
        classificacao = "Obesidade Severa (Grau II)";
        cor = cores.vermelho;
    } else if (imc > 39.9 && imc >= 40) {
        classificacao = "Obesidade Mórbida (Grau III)";
        cor = cores.vermelho;
    }

    // Exibição da classificação com cor
    const elemClassificacao = document.getElementById("classificacaoIMC");
    elemClassificacao.textContent = classificacao;
    elemClassificacao.style.color = cor;

    // Exibição dos valores de BSA e IMC
    document.getElementById("valorBSA").textContent = `O valor do seu BSA é ${bsa.toFixed(2)}(m²)`;
    document.getElementById("valorIMC").textContent = `O valor do seu IMC é ${imc.toFixed(2)}(Kg/m²)`;

    // Programa finalizado
    const elemFinalizado = document.getElementById("finalizado");
    elemFinalizado.textContent = "Programa finalizado 🚀";
    elemFinalizado.style.color = cores.ciano;

    // Mostrar resultados e esconder formulário
    formPerfil.style.display = "none";
    resultados.style.display = "block";
}

// Função para limpar o formulário e voltar ao início
function limparFormulario() {
    formPerfil.reset();
    formPerfil.style.display = "block";
    resultados.style.display = "none";
}

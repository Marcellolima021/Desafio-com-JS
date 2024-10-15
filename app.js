let titulo = document.querySelector('h1')
titulo.innerHTML =  "Hora do desafio"

function botaoConsole(){
    console.log("Botão console foi clicado")
}

function botaoAlert(){
    alert("Eu Amo JS")
}

function mensagem(){
    let cidade = prompt("Digite uma cidade do brasil")
    alert (`Estive em ${cidade} e me lembrei de você`)
}

function somar(){
   let num1 = parseInt(prompt("Digite um numero inteiros"));
   let num2 = parseInt(prompt("Digite outro numero inteiros"));
    let soma = num1 + num2
   alert(`${num1}+${num2}= ${soma}`);
}

//Métodos de entrada
const nome = prompt ("Digite seu nome")

const notificação = confirm ("Deseja receber notificações?")

//Métodos de saída
alert(nome)

console.log()

//Operações:
//Operações aritméticas

let soma = 1 + 2 // output:3

console.log(soma)

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))

soma = numero1 + numero2
console.log(soma)

const email = prompt ("Digite seu email")
const senha = Number (prompt ("Digite sua senha"))

if (email === 'yvieira3007@gmail.com' && senha ===123456){
    alert ("Login efetuado com sucesso")
} else{
    alert("email ou senha incorreta")
}

// Qual o resultado da seguinte expressão?let total = 10 + 5 * 2 / 2 + 20;

// Crie duas expressões que retornem NaN

// Somar a string '200' com o número 50 e retornar 250

// Incremente o número 5 e retorne o seu valor incrementado

// Como dividir o peso por 2? 
let numero = '60';
let unidade = 'kg';
let peso = numero + unidade;
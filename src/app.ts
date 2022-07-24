// ######  Resposta desafio 1  ######
/*
let employee = {
    code: 10,
    name: 'John'
};

let employee2: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 122,
    name: 'John'
}

*/

 // #####  Resposta desafio 2  #####
 
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora, 
    Padeiro
}

 interface pessoa {
    nome: string;
    idade: number;
    profissao: Profissao
}

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}


// ######  Resposta desafio 3  ######
/*
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0;
limparSaldo();

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limpaCampoSoma();
    }
}

function limpaCampoSoma() {
    soma.value = '';
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
*/
//Verficar se o dependente do labank tem entre 13 e 17 anos para pedir um cartão;

//  let numeroRamal=Number (prompt('Solicitação de cartão de credito \n Digite a opção desejada \n 1- Fácil \n 2-Black \n 3-Platinum \n 4-Master Gold'))

// if (idadeDependente>=13) {
//     if (idadeDependente<18) {
//        console.log('S eu filho já pode ter um cartão Labank, vinculado ao seu!');
//     }else {
//         console.log('Consulte outras possibilidades no Labank');
//     }

// }

// de maneira simplificada:

// if (idadeDependente>=13 && idadeDependente<18) {
// console.log('Seu filho já pode ter um cartão Labank, vinculado ao seu!');
// }else {
// console.log('Consulte outras possibilidades no Labank'); 
// }

//if ternário:

// console.log(idadeDependente===13? 'Ja pode ter cartão': 'mensagem 2');

//switch case:

// switch(numeroRamal){
//     case 1: 
//         console.log('Cartão Fácil adiquirido');
//         break;
//     case 2: 
//         console.log('Cartão Black adquirido');
//         break;
//     case 3:
//         console.log('Cartão Platinum adquirido');
//         break;
//     case 4:
//         console.log('Cartão Master Gold adquirido');   
//         break;
//     default:
//         console.log('Escolha uma das opções disponíveis');
//}

const unicoNumero = Number (prompt ('Digite um número aqui'))

if (unicoNumero%2===0){
    if (unicoNumero%3===0){
    console.log('Esse número é divisivel por 2 ou por 3');
    }
} else {
    console.log('Seu numero não é divisivel nem por 3 e nem por 2');
}

if (unicoNumero%2===0 && unicoNumero%3===0) {
    console.log('Esse número é divisivel por 2 ou por 3');
} else {
    console.log('Seu numero não é divisivel nem por 3 e nem por 2');
}
if (unicoNumero===30? 'UFA, ACERTEI!!' : 'Não foi dessa vez') {
}

switch (unicoNumero) {
    case 6:
       console.log('MEIA DUZIA'); 
        break;
    case 12:
        console.log('UMA DUZIA');
        break;
    case 18:
        console.log('MAIOR DE IDADE');
        break;
    case 24:
        console.log ('ÓTIMA IDADE');
        break;
    case 30:
        console.log('VOU ESTAR RICO');
        break
    default:
        console.log('O número é menor que 30 e maior que 6');
        break;
}
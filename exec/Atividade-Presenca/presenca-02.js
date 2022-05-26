"use strict";
function printDec(valor) {
    let dec = (valor).toString(10);
    return dec;
}
function printHex(valor) {
    let hex = (valor).toString(16);
    return hex;
}
function printOct(valor) {
    let oct = (valor).toString(8);
    return oct;
}
function printBin(valor) {
    let bin = (valor).toString(2);
    return bin;
}
function mostrarTabela() {
    console.log('Decimal Octal Hexadecimal  Binario');
    console.log('--------- ------ ----------- -------');
    for (let i = 0; i <= 225; i++) {
        console.log(`${printDec(i)}  ${printOct(i)}   ${printHex(i)}   ${printBin(i)}`);
    }
}
mostrarTabela();

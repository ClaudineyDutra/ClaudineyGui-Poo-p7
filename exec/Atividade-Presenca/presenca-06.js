"use strict";
let myNumbers = [];
let controle = 0;
while (controle < 6) {
    let v1 = Math.floor(Math.random() * 10);
    let v2 = Math.floor(Math.random() * 10);
    let num = v1 * v2;
    if (num <= 60 && num != 0) {
        myNumbers.push(num);
        controle++;
    }
}
for (let cont = 0; cont < 6; cont++) {
    for (let i = 0; i < 6; i++) {
        if (myNumbers[i] > myNumbers[i + 1]) {
            let temp = myNumbers[i];
            myNumbers[i] = myNumbers[i + 1];
            myNumbers[i + 1] = temp;
        }
    }
}
console.log(myNumbers);

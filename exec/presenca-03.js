"use strict";
class Stack {
    constructor() {
        this.stack = [4];
        this.posicao = -1;
    }
    addStack() {
        this.posicao += 1;
        console.log(this.posicao);
    }
}
let pilha;
pilha = new Stack();

"use strict";
/* DECIDI USAR POO PARA FAZER O EXERCÍCIO POR CONTA
DE TER COMO INSTANCIAR UM OBJETO, PODENDO CRIAR FILAS DIFERENTES*/
//Criando a classe
class Queue {
    constructor() {
        // Passando os atributos dessa classe
        this.People = [];
        this.maxQueue = 5;
        this.fim = 0;
        this.nprimeiro = 0;
        this.nItems = 0;
    }
    // Metódo para verificar se a Fila está vazia
    isEmpty() {
        if (this.nItems == 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    // Metódo para verificar se a Fila está cheia
    isFull() {
        if (this.fim == this.maxQueue) {
            return 1;
        }
        else {
            return 0;
        }
    }
    // Metódo para inserir elementos na Fila
    addQueue(nome) {
        if (this.isFull() == 1) {
            console.log('Fila está cheia!');
        }
        else {
            this.People[this.fim] = nome;
            console.log(nome + ' entrou na fila');
            this.fim++;
            this.nItems++;
        }
    }
    // Metódo para remover elementos da Fila
    removeQueue() {
        if (this.isEmpty() == 1) {
            console.log('A fila está vazia!');
        }
        else {
            let temp = this.People[this.nprimeiro];
            console.log(this.People[this.nprimeiro] + ' saiu da fila');
            this.nprimeiro++;
            this.nItems--;
            return temp;
        }
    }
    // Metódo para mostrar a Fila
    viewQueue() {
        if (this.isEmpty() == 1) {
            console.log('Fila não tem ninguém!');
        }
        else {
            let np = this.nprimeiro;
            for (let i = 0; i < this.nItems; i++) {
                console.log(this.People[np] + ' está na fila');
                np++;
            }
        }
    }
}
// Criando um objeto do tipo Queue
let fila = new Queue();
// Inserindo pessoas na fila
fila.addQueue('Clau');
fila.addQueue('Maria');
fila.addQueue('Pedro');
fila.addQueue('Julia');
console.log('-------------------------');
// Removendo pessoas da fila
fila.removeQueue();
fila.removeQueue();
fila.removeQueue();
console.log('-------------------------');
// Inserindo mais uma pessoa na fila
fila.addQueue('Cristina');
console.log('-------------------------');
// Mostrando a fila (Possui 2 pessoas)
fila.viewQueue();
console.log('-------------------------');
// Removendo o resto das pessoas da fila
fila.removeQueue();
fila.removeQueue();
console.log('-------------------------');
// Mostrando a fila (Está Vazia)
fila.viewQueue();

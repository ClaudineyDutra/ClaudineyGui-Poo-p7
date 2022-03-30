/* DECIDI USAR POO PARA FAZER O EXERCÍCIO POR CONTA
DE TER COMO INSTANCIAR UM OBJETO, PODENDO CRIAR PILHAS DIFERENTES*/

//Criando a classe
class Stack{
    // Passando os atributos dessa classe
    stack: number[] = []
    topo: number = -1
    maxStack = 4

    // Metódo para verificar se a Pilha está vazia
    isEmpty(): number{
        if(this.topo == -1){
            return 1
        }else{
            return 0
        }
    }
    // Metódo para verificar se a Pilha está cheia
    isFull(): number{
        if(this.topo == this.maxStack){
            return 1
        }else{
            return 0
        }
    }
    // Metódo para inserir elementos na Pilha
    push(num: number): void{
        if(this.isFull() == 1){
            console.log('Pilha cheia')
        }else{
            this.topo++
            this.stack[this.topo] = num
            console.log('Elemento '+num+' Adicionado!')
        }
    }
    // Metódo para remover elementos na Pilha
    pop(): number | void{
        if(this.isEmpty() == 1){
            console.log('Pilha vazia')
        }else{
            let aux = this.stack[this.topo]
            console.log('Elemento '+aux+' Retirado')
            this.topo--
            return aux
        }
    }
    // Metódo para mostrar a Pilha
    view(): void{
        if(this.isEmpty() == 1){
            console.log('Pilha Vazia')
         }else{
            for(let i = 0; i <= this.topo; i++){
                console.log('Pilha tem o elemento '+this.stack[i])    
            }
        }
    }
}
// Criando um objeto do tipo Stack
let pilha: Stack = new Stack()

// Inserindo elementos na Pilha
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
console.log('-------------------------')
// Mostrando a Pilha (Possui 4 elementos)
pilha.view()
console.log('-------------------------')
// Removendo 2 elementos da Pilha
pilha.pop()
pilha.pop()
console.log('-------------------------')
// Mostrando a Pilha (Possui 2 elementos)
pilha.view()
console.log('-------------------------')
// Removendo 2 elementos da Pilha
pilha.pop()
pilha.pop()
console.log('-------------------------')
// Mostrando a pilha (Vazia)
pilha.view()



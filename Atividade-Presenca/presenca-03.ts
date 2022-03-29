class Stack{
    public stack: Array<number> = [4]
    public posicao: number = -1

    addStack(): void{
        this.posicao += 1;
        console.log(this.posicao)
    }
    
}

let pilha: Stack
pilha = new Stack()

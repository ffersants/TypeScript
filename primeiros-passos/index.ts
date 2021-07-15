let strArray: string[];
let strArray2: Array<string>;

let numArray: number[];
let numArray2: Array<number>;

class Pessoa{
    name: string;
    age: number;
    dreams: string[];
    sons?: string[];

    constructor(name: string, age: number, dreams: string[], sons?: string[]){
        this.name = name;
        this.age = age;
        this.dreams = dreams;
        this.sons = sons;
    }
}

let multidao: Pessoa[] = []

multidao.push(new Pessoa("Fernando", 20, ["Viajar o mundo"]))

console.log(multidao)
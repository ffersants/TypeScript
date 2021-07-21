//método 1 para atribuir dado a objeto já declarados
{
const pessoa: {
    //define chaves e tipo de dado para cada chave
    nome: string;
    idade: number;
    profissao: string;
    //método 1 para atribuir dado a objeto já declarados
    nacionalidade ?: string;
} = {
    //estrutura o objeto com valores
    nome: "Fernando",
    idade: 21,
    profissao: "desenvolvedor"
}
//método 1 para atribuir dado a objeto já declarados
pessoa.nacionalidade = "Brasileira"
console.log(pessoa)
}

//método 2 para atribuir valores desconhecidos a objeto 
{
    //desvantagem: objeto muito aberto, sem controle do programador
    const pessoa2 : Record<string, unknown> = { }
    //or pessoa2 : any = {}
    pessoa2.nome = "Fernando"
    pessoa2.idade = 21

    console.log(pessoa2)
}

// Maneira ideal para tipar chaves do objeto, declarando seu esqueleto, 
// e ainda assim permitir a criação de novas chaves com respectivos valores
{
    let pessoa3 : {
        name: string;
        idade: number;
        profissao: string;
        //chave tipo string: valor desconhecido
        [key: string]: unknown
    } = {
        name: "Fernando",
        idade: 20,
        profissao: "Programador"
    }
    pessoa3.nacionalidade = "Brasileira"
    pessoa3.rg = 123456
    console.log(pessoa3)
}
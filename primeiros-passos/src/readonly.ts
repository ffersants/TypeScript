let voo : {
    readonly preco: number;
    [key: string]: unknown;
} = {
    preco: 5000,
    destino: "Bahia"
}
//valor da chave não pode ser alterado
voo.preco = 2500

console.log(voo)
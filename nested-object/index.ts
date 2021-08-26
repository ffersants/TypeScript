type Jogador = {
    nome: string;
    idade: number;
    totalDeGols: number;
}

type Time = {
    nome: string;
	totalDeJogadores: number;
	hino: string;
    jogadores: Array<Jogador>
}

const flamengo: Time = {
    nome: 'Flamengo',
    totalDeJogadores: 5,
    hino: 'Uma ves flamengo...',
    jogadores: [
        {
            nome: 'Fernando',
            idade: 20,
            totalDeGols: 57
        }
    ]
}

console.log(flamengo)
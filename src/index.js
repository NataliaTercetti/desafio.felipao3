const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

function perguntarPerguntas() {
    rl.question('Digite o nome do herói: ', (nome) => {
        rl.question('Digite a idade do herói: ', (idade) => {
            rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipo) => {

                //Objeto da classe Heroi
                const heroi = new Heroi(nome, idade, tipo);

                // Chamar o método atacar
                heroi.atacar();

                rl.close();
            });
        });
    });
}

perguntarPerguntas();

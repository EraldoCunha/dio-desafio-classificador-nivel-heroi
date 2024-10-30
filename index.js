const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do herói: ", (nome) => {
    rl.question("Digite a quantidade de experiência (XP) do herói: ", (xpInput) => {
        let xp = parseInt(xpInput) || 0;

        function determinarNivel(xp) {
            switch (true) {
                case xp < 1000:
                    return "Ferro";
                case xp <= 2000:
                    return "Bronze";
                case xp <= 5000:
                    return "Prata";
                case xp <= 7000:
                    return "Ouro";
                case xp <= 8000:
                    return "Platina";
                case xp <= 9000:
                    return "Ascendente";
                case xp <= 10000:
                    return "Imortal";
                default:
                    return "Radiante";
            }
        }

        let nivel = determinarNivel(xp);
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);

        rl.close();
    });
});

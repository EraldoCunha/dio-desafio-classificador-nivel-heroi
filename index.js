const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function determinarNivel(xp) {
    if (xp < 1000) return "Ferro";
    else if (xp <= 2000) return "Bronze";
    else if (xp <= 5000) return "Prata";
    else if (xp <= 7000) return "Ouro";
    else if (xp <= 8000) return "Platina";
    else if (xp <= 9000) return "Ascendente";
    else if (xp <= 10000) return "Imortal";
    else return "Radiante";
}

function perguntarContinuar() {
    return new Promise((resolve) => {
        rl.question("Deseja classificar mais heróis? (s/n): ", (resposta) => {
            resolve(resposta.toLowerCase() === 's');
        });
    });
}

async function classificarHerois() {
    let continuar = true; 

    while (continuar) {
        const nome = await new Promise((resolve) => {rl.question("Digite o nome do herói: ", resolve)});

        const xpInput = await new Promise((resolve) => {rl.question("Digite a quantidade de experiência (XP) do herói: ", resolve)});

        let xp = parseInt(xpInput);

         if (isNaN(xp)) {
             console.log("Por favor, insira um número válido para a experiência (XP).");
         } else {
             let nivel = determinarNivel(xp);
             console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
         }

         
         continuar = await perguntarContinuar();  
        
    }

    console.log("Encerrando a aplicação...");
    rl.close(); 
}

classificarHerois();

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Base mais ampla (mas ainda limitada)
const mamiferos = [
    "cachorro", "gato", "vaca", "cavalo", "rato",
    "leão", "tigre", "elefante", "coelho", "porco"
];

const aves = [
    "galinha", "pato", "pinguim", "papagaio",
    "águia", "coruja", "canário"
];

const repteis = [
    "cobra", "jacaré", "tartaruga", "lagarto", "iguana"
];

function classificar(animal) {

    animal = animal.toLowerCase().trim();

    if (mamiferos.includes(animal)) {
        return "🐶 Mamífero";
    }

    if (aves.includes(animal)) {
        return "🐦 Ave";
    }

    if (repteis.includes(animal)) {
        return "🦎 Réptil";
    }

    return "❌ Animal não reconhecido";
}

// Programa
console.log("====================================");
console.log("   CLASSIFICADOR DE ANIMAIS");
console.log("====================================\n");

rl.question("Digite o nome de um animal: ", function(animal) {

    console.log("\n====================================");
    console.log("RESULTADO");
    console.log("====================================");

    console.log(`Animal: ${animal}`);
    console.log(`Classificação: ${classificar(animal)}`);

    console.log("====================================");

    rl.close();
});
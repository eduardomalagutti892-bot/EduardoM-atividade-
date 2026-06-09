const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Calculadora de Imposto de Renda ===");

rl.question("Digite sua renda mensal: R$ ", (entrada) => {
    const renda = parseFloat(entrada);

    let aliquota;

    if (renda <= 2112) {
        aliquota = 0;
    } else if (renda <= 2826.65) {
        aliquota = 0.075;
    } else if (renda <= 3751.05) {
        aliquota = 0.15;
    } else if (renda <= 4664.68) {
        aliquota = 0.225;
    } else {
        aliquota = 0.275;
    }

    const imposto = renda * aliquota;
    const liquido = renda - imposto;

    console.log("\nResultado:");
    console.log(`Renda: R$ ${renda.toFixed(2)}`);
    console.log(`Alíquota: ${(aliquota * 100).toFixed(1)}%`);
    console.log(`Imposto: R$ ${imposto.toFixed(2)}`);
    console.log(`Renda líquida: R$ ${liquido.toFixed(2)}`);

    rl.close();
});0
/*
=========================================================
 CONVERSOR DE MOEDAS
=========================================================

O usuário deverá informar:

- Valor em Real (R$)
- Moeda desejada para conversão

MOEDAS DISPONÍVEIS:
1 - Dólar (USD)
2 - Euro (EUR)
3 - Libra (GBP)

O sistema converterá o valor em Real
para a moeda escolhida.

=========================================================
*/

// Importa módulo para entrada de dados
const readline = require("readline");

// Cria interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Taxas de conversão (exemplo)
const dolar = 5.40;
const euro = 6.20;
const libra = 7.10;

// Função principal
function conversorMoedas() {

    console.log("====================================");
    console.log("      CONVERSOR DE MOEDAS");
    console.log("====================================\n");

    // Solicita o valor em reais
    rl.question("Digite o valor em Real (R$): ", function(valorReal) {

        // Converte para número
        valorReal = parseFloat(valorReal);

        console.log("\nEscolha a moeda para conversão:");
        console.log("1 - Dólar (USD)");
        console.log("2 - Euro (EUR)");
        console.log("3 - Libra (GBP)");

        console.log("------------------------------------");

        // Solicita a opção
        rl.question("Digite a opção desejada: ", function(opcao) {

            // Converte para número
            opcao = parseInt(opcao);

            console.log("\n====================================");
            console.log("RESULTADO DA CONVERSÃO");
            console.log("====================================");

            console.log(`Valor em Real: R$ ${valorReal.toFixed(2)}`);

            console.log("------------------------------------");

            // Verifica a moeda escolhida
            switch (opcao) {

                case 1:
                    let valorUSD = valorReal / dolar;

                    console.log("Moeda escolhida: Dólar (USD)");
                    console.log(`Valor convertido: US$ ${valorUSD.toFixed(2)}`);
                    break;

                case 2:
                    let valorEUR = valorReal / euro;

                    console.log("Moeda escolhida: Euro (EUR)");
                    console.log(`Valor convertido: € ${valorEUR.toFixed(2)}`);
                    break;

                case 3:
                    let valorGBP = valorReal / libra;

                    console.log("Moeda escolhida: Libra (GBP)");
                    console.log(`Valor convertido: £ ${valorGBP.toFixed(2)}`);
                    break;

                default:
                    console.log("❌ Opção inválida");
            }

            console.log("====================================");

            // Fecha o programa
            rl.close();
        });
    });
}

// Executa o sistema
conversorMoedas();
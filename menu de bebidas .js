/*
=========================================================
 MENU DE BEBIDAS
=========================================================

O usuário poderá escolher uma bebida digitando
um número correspondente ao menu.

1 - Café
2 - Chá
3 - Suco
4 - Água

Caso o número não exista no menu,
o sistema exibirá:
"Opção inválida"

=========================================================
*/

// Importa módulo para entrada de dados
const readline = require("readline");

// Cria interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal
function menuBebidas() {

    console.log("====================================");
    console.log("         MENU DE BEBIDAS");
    console.log("====================================");

    console.log("1 - Café");
    console.log("2 - Chá");
    console.log("3 - Suco");
    console.log("4 - Água");

    console.log("------------------------------------");

    // Pergunta a opção do usuário
    rl.question("Escolha uma opção: ", function(opcao) {

        console.log("\n====================================");

        // Converte para número
        opcao = parseInt(opcao);

        // Verifica a opção escolhida
        switch (opcao) {

            case 1:
                console.log("☕ Você escolheu: Café");
                break;

            case 2:
                console.log("🍵 Você escolheu: Chá");
                break;

            case 3:
                console.log("🧃 Você escolheu: Suco");
                break;

            case 4:
                console.log("💧 Você escolheu: Água");
                break;

            default:
                console.log("❌ Opção inválida");
        }

        console.log("====================================");

        // Fecha o programa
        rl.close();
    });
}

// Executa o sistema
menuBebidas();
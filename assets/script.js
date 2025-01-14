/* VARIAVEIS */
let btnproximo1 = document.querySelector('#proximo')
let divOpc1 = document.querySelector('.opc11')
let opcoes = document.querySelectorAll('.opc');

let divOpc2 = document.querySelector('.opc22')
let btnproximo2 = document.querySelector('#proximo2')

let divfinal = document.querySelector('.divFinal')
let listaOpc = document.querySelector('.ol2');

let aperto = true

let igdeEscolhidos = []

let TxtNamePizza = document.querySelector('.namePizz') //h2 com nome da pizza na div final
let TxtIgdPizza = document.querySelector('.igdPizza') //p com ingredientes da pizza na div final 

let btnVoltarInicio = document.querySelector('.voltarInicio');



/* EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS  EVENTOS */
// Evento para o botão "Voltar ao Início"
btnVoltarInicio.addEventListener('click', () => {
    voltarAoInicio();
});


// Adiciona evento de click nas opções para selecionar a categoria e chamar a função prencheTela
opcoes.forEach(opc => {
    opc.addEventListener('click', (e) => {
        let ctgrEscolhida = e.target.getAttribute('data-op'); // Obtém o atributo data-op do elemento

        // Verifica se já existe um elemento selecionado
        const elementoClicado = document.querySelector('.clicou');

        // Gerencia a seleção e atualização da tela
        if (!e.target.classList.contains("clicou")) {
            if (elementoClicado) {
                elementoClicado.classList.remove('clicou'); // Remove a seleção anterior
            }
            e.target.classList.add("clicou"); // Adiciona a seleção atual
            console.log(`Categoria escolhida: ${ctgrEscolhida}`);
            prencheTela(ctgrEscolhida); // Chama a função que atualiza a tela
        } else {
            e.target.classList.remove("clicou"); // Remove a seleção se o mesmo elemento for clicado
            prencheTela(null); // Limpa a tela, se necessário
        }
    });
});




/* FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES  FUNÇÕES */

// Atualiza a tela com base na categoria escolhida
function prencheTela(dataop) {
    // Limpa a lista de opções (evita duplicações)
    listaOpc.innerHTML = "";

    if (dataop) {
        // Move para a próxima tela ao clicar no botão
        btnproximo1.onclick = () => {
            divOpc1.style.display = "none";
            divOpc2.style.display = "flex";
        };

        // Obtém os ingredientes gerais da categoria escolhida
        let ingredientesG = cardapio[dataop].ingredientesGerais;
        let categoriaEscolhida = cardapio[dataop];

        // Itera sobre o array de ingredientes e cria os elementos da lista
        ingredientesG.forEach(texto => {
            let newLi = document.createElement('li'); // Cria um novo elemento <li>
            newLi.classList.add('opc2');
            newLi.innerText = texto; // Adiciona o texto ao <li>
            listaOpc.appendChild(newLi); // Adiciona o <li> à lista
        });

        escolhePizza(categoriaEscolhida); // Atualiza a escolha da pizza
    }
}




// funcao reponsavel por retornar um array com igd escolhidos pelo usuario 
// recbe:
// categoriaEscolhida que e uma string que sera usada na proxima funcao
// retorna: passa pra funcao o array de igd escolhidos e o nome da categoria que foi obtido na funcao anterior 
function escolhePizza(categoriaEscolhida) {
    document.querySelectorAll('.opc2').forEach(opcVez => {
        opcVez.addEventListener('click', (e) => {
            const ingrdClicados = e.target.innerText 

            if (igdeEscolhidos.length < 8) {
                // verifica se o igd ja esta no array, se sim o remove
                if (igdeEscolhidos.includes(ingrdClicados)) {
                    igdeEscolhidos = igdeEscolhidos.filter(igd => igd !== ingrdClicados)
                    e.target.classList.remove('clicou2')
                    // console.log(`elemento removido ${ingrdClicados}`)
                } else {
                    igdeEscolhidos.push(ingrdClicados)
                    e.target.classList.add('clicou2')
                    
                    console.log(`ingredientes escolhidos: ${igdeEscolhidos}`)
                    // adiciona evento de click no botao pra poder passar pro proximo
                    if (igdeEscolhidos.length > 3) {
                        btnproximo2.onclick = () => {
                            retornaPizza(igdeEscolhidos, categoriaEscolhida)
                        }
                        // console.log('ja pode apertar em proximo ')
                    }
                }
            }
        })
    })
}


// funcao que retorna a pizzza final, a que mais se encaixa nos ingredientes escolhidos 
function retornaPizza(igdeEscolhidos, cardapEscolhido) {
    // Verificar se os parâmetros são válidos
    if (!Array.isArray(igdeEscolhidos) || typeof cardapEscolhido !== "object" || !Array.isArray(cardapEscolhido.pizzas)) {
        console.error("Os parâmetros fornecidos estão incorretos.");
        return null;
    }

    const arrayObjCardap = cardapEscolhido.pizzas; // Array de objetos com arrays dentro
    const igdArray = igdeEscolhidos; // Array normal com os ingredientes escolhidos


    // Fazer o mapeamento para contar os ingredientes iguais
    const pizzasComContagem = arrayObjCardap.map(objVez => {
        const contador = objVez.ingredientes.filter(item => igdArray.includes(item)).length;

        return { nome: objVez.nome, ingredientes: objVez.ingredientes, quantidadeIguais: contador, };// Retornar o objeto com o nome da pizza e a quantidade de ingredientes iguais
    });

    // Encontrar a pizza com a maior quantidade de ingredientes semelhantes
    const pizzaMaisSemelhante = pizzasComContagem.reduce((maior, atual) =>
        atual.quantidadeIguais > maior.quantidadeIguais ? atual : maior
    );

    // Exibir o resultado final no console
    console.log("Pizza mais semelhante:", pizzaMaisSemelhante);

    // chama a funcao que ira exibir o resultado final
    exibePizzaFinal(pizzaMaisSemelhante)

    return pizzaMaisSemelhante;
}



// funcao reponsavel por exibir a div final e a pizza final do cliente
//  recebe o nome da pizza que mais se encaixa
//  recebe o cardapio escolhido

function exibePizzaFinal(pizzaMaisSemelhante) {
    if (pizzaMaisSemelhante) {
        divOpc1.style.display = "none"
        divOpc2.style.display = "none"
        divfinal.style.display = "flex"

        let nomeFinal = pizzaMaisSemelhante.nome
        let ingredienteFin = pizzaMaisSemelhante.ingredientes.join(", ")

        TxtNamePizza.innerText = nomeFinal
        TxtIgdPizza.innerText = ingredienteFin
    }
}




// função de voltar ao início
function voltarAoInicio() {
    // Exibe a tela inicial e oculta as outras
    divOpc1.style.display = "flex";
    divOpc2.style.display = "none";
    divfinal.style.display = "none";

    // Limpa as seleções e reinicia as variáveis
    document.querySelectorAll('.clicou').forEach(element => {
        element.classList.remove('clicou');
    });

    // Reseta a lista de ingredientes escolhidos
    igdeEscolhidos = [];

    // Reseta o nome e os ingredientes da pizza na tela final
    TxtNamePizza.innerText = "";
    TxtIgdPizza.innerText = "";

    // Reseta o botão de "Próximo" caso necessário
    btnproximo2.onclick = null;

    console.log("Tela reiniciada. Tudo voltado ao início!");
}

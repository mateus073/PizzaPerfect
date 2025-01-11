/*VARIAVEIS */
let btnproximo1 = document.querySelector('#proximo')
let opcoes = document.querySelectorAll('.opc');
let divOpc1 = document.querySelector('.opc11')
let divOpc2 = document.querySelector('.opc22')
let divfinal = document.querySelector('.divFinal')
let listaOpc = document.querySelector('.ol2');
let aperto = true
let igdeEscolhidos = []
let TxtNamePizza = document.querySelector('.namePizz') //h2 com nome da pizza na div final
let TxtIgdPizza = document.querySelector('.igdPizza') //p com ingredientes da pizza na div final 




/* EVENTOS  */
// addciona evento de click nas opc pra pegar o nome do data-op e chamara pra funcao prenchetela
opcoes.forEach(opc => {
    opc.addEventListener('click', (e) => {
        let ctgrEscolhida = e.target.getAttribute('data-op'); // Se o atributo "data-h" estiver no HTML
        // deixa a categoria na cor vermelha e passa o nome do objeto que irei trablhar
        if (aperto) {
            e.target.style.backgroundColor = "#a12630"
            prencheTela(ctgrEscolhida);
            aperto = false
        }
    });
});





/*FUNCOES  */

// funcao que exibe a proxima tela e recebe o data-op(e o indice do objt escolhido) e prenche e tela com os ingredientes da categoria
function prencheTela(dataop) {
    if (dataop) {
        btnproximo1.addEventListener('click', () => {
            divOpc1.style.display = "none"
            divOpc2.style.display = "flex"
        })

        // obtem os ingredites gerais
        let ingredientesG = cardapio[dataop].ingredientesGerais
        let categoriaEscolhida = cardapio[dataop]

        // Itera sobre o array de ingredientes
        for (let x = 0; x < ingredientesG.length; x++) {
            let texto = ingredientesG[x]; // Obtém o texto do ingrediente
            let newLi = document.createElement('li'); // Cria um novo elemento <li>
            newLi.classList.add('opc2')
            newLi.innerText = texto; // Adiciona o texto ao <li>

            listaOpc.appendChild(newLi); // Adiciona o <li> à lista
        }
        escolhePizza(categoriaEscolhida)
    }
}



// funcao reposavel por pegar as pizzas que o usuario clicou e mudar sua cor
function escolhePizza(categoriaEscolhida) {
    document.querySelectorAll('.opc2').forEach(opcVez => {
        opcVez.addEventListener('click', (e) => {
            let ingrdClicados = e.target.innerText

            if (igdeEscolhidos.length <= 2) {
                igdeEscolhidos.push(ingrdClicados)
                e.target.style.backgroundColor = "#a12630"
                console.log(igdeEscolhidos)
            }
            else if (ingrdClicados.length >= 2) {
                retornaPizza(igdeEscolhidos, categoriaEscolhida)
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
//
function exibePizzaFinal(pizzaMaisSemelhante) {
    if(pizzaMaisSemelhante) {
        divOpc1.style.display = "none"
        divOpc2.style.display = "none"
        divfinal.style.display = "flex"

        let nomeFinal = pizzaMaisSemelhante.nome
        let ingredienteFin = pizzaMaisSemelhante.ingredientes.join(", ")

        TxtNamePizza.innerText = nomeFinal
        TxtIgdPizza.innerText = ingredienteFin
    }
}
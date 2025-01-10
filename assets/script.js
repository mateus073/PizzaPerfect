/*VARIAVEIS */
let btnproximo1 = document.querySelector('#proximo')
let opcoes = document.querySelectorAll('.opc');
let divOpc1 = document.querySelector('.opc11')
let divOpc2 = document.querySelector('.opc22')
let listaOpc = document.querySelector('.ol2');
let aperto = true
let igdeEscolhidos = []




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


// funcao pra retorna a pizza que mais se assemelha aos ingredientes escolhidos 
function retornaPizza(igdeEscolhidos, cardapEscolhido) {
    let arrayObjCardap = cardapEscolhido.pizzas
    let igdArray = igdeEscolhidos
    console.log(igdArray)
    console.log(arrayObjCardap)
    
    console.log(Array.isArray(igdArray) )

    return arrayObjCardap.map(objVez => {
        // conta quantos igred cada pizza tem semelhante aos escolhidos 
        const contador = objVez.ingredientes.filter(item => {
            return igdArray.includes(item)
        }).length;
        return { nome: objVez.nome, quantidadeIguais: contador }
        // return console.log({ nome: objVez.nome, quantidadeIguais: contador })
    })
    .reduce((maior, atual) => atual.quantidadeIguais > maior.quantidadeIguais ? atual : maior
    )}



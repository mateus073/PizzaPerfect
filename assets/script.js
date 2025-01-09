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
        if(aperto) {
        e.target.style.backgroundColor = "#a12630"
        prencheTela(ctgrEscolhida);
        aperto = false
        }
    });
});





/*FUNCOES  */

// funcao que recebe o data op e prenche e tela com os ingredientes da categoria
//dataop e o indice do objeto escolhido 
function prencheTela(dataop) {
    if (dataop) {
        btnproximo1.addEventListener('click', () => {
            divOpc1.style.display = "none" 
            divOpc2.style.display = "flex" 
        })

        // obtem os ingredites gerais
        let ingredientesG = cardapio[dataop].ingredientesGerais

        // Itera sobre o array de ingredientes
        for (let x = 0; x < ingredientesG.length; x++) {
            let texto = ingredientesG[x]; // Obtém o texto do ingrediente
            let newLi = document.createElement('li'); // Cria um novo elemento <li>
            newLi.classList.add('opc2')
            newLi.innerText = texto; // Adiciona o texto ao <li>

            listaOpc.appendChild(newLi); // Adiciona o <li> à lista
        }
        escolhePizza(ingredientesG)
    }
}



// funcao reposavel por pegar todas as pizzas  e acessar seu array de ingredientes pra comparar com o os ingredientes escolhidos
function escolhePizza(ingrestesg) {
    document.querySelectorAll('.opc2').forEach(opcVez => {
        opcVez.addEventListener('click', (e) => {
            let ingrdClicados = e.target.innerText
            if(igdeEscolhidos.length <= 3) {
                igdeEscolhidos.push(ingrdClicados)
                console.log(igdeEscolhidos)
                e.target.style.backgroundColor = "#a12630"
            }
            else{
                
            }
        })
    })
}
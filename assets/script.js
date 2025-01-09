/*VARIAVEIS */
let btnproximo1 = document.querySelector('#proximo')
let opcoes = document.querySelectorAll('.opc');
let listaOpc = document.querySelector('.opcoes');
let opcoes2 = document.querySelector('.opcoes2');




/* EVENTOS  */
// addciona evento de click nas opc pra pegar o nome do data-op e chamara pra funcao prenchetela
opcoes.forEach(opc => {
    opc.addEventListener('click', (e) => {
        let ctgrEscolhida = e.target.getAttribute('data-op'); // Se o atributo "data-h" estiver no HTML
        prencheTela(ctgrEscolhida);
    });
});



/*FUNCOES  */
// funcao que recebe o data op e prenche e tela com os ingredientes da categoria
//dataop e o indice do objeto escolhido 
function prencheTela(dataop) {
    if (dataop) {
        btnproximo1.addEventListener('click', () => {
            window.location.href = 'escolhaOpc2.html'
        })

        // obtem os ingredites gerais
        let ingredientesG = cardapio[dataop].ingredientesGerais
        console.log(ingredientesG)
          // Itera sobre o array de ingredientes
          for (let x = 0; x < ingredientesG.length; x++) {
            let texto = ingredientesG[x]; // Obtém o texto do ingrediente
            let newLi = document.createElement("li"); // Cria um novo elemento <li>
            newLi.className = "opc2"
            newLi.innerText = texto; // Adiciona o texto ao <li>

            opcoes2.appendChild(newLi); // Adiciona o <li> à lista
        }
    }
}
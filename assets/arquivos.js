
// array de objetos que representa o cardapio
// obs o array detro deles de ingredientes e pra listar os principais ingredientes de cada categoria e facilitar na hora de filtrar as pizzas 
const cardapio = {
    pizzasDoces: {
        ingredientesGerais: ["Confetti", "Chocolate branco", "Chocolate ao leite",
            "Bombom Ouro Branco", "Granulado", "Coco ralado", "Morango", "Uva", "Banana", "Doce de leite"],

        pizzas: [
            {
                nome: "Brigadeiro",
                ingredientes: ["Chocolate ao leite", "Granulado"]
            },
            {
                nome: "Banana Nevada",
                ingredientes: ["Banana", "Chocolate branco"]
            },
            {
                nome: "Prestígio",
                ingredientes: ["Chocolate ao leite", "Leite condensado", "Coco ralado"]
            },
            {
                nome: "Morango",
                ingredientes: ["Chocolate ao leite", "Leite condensado", "Morango"]
            },
            {
                nome: "Banana c/ Doce de Leite",
                ingredientes: ["Doce de leite", "Banana", "Canela"]
            },
            {
                nome: "Fondue",
                ingredientes: ["Chocolate ao leite", "Uva", "Morango"]
            },
            {
                nome: "Ouro Branco",
                ingredientes: ["Chocolate branco", "Chocolate ao leite", "Bombom Ouro Branco"]
            },
            {
                nome: "Três Desejos",
                ingredientes: ["Chocolate ao leite", "Doce de leite", "Catupiry", "Chocolate branco"]
            },
            {
                nome: "Confetti",
                ingredientes: ["Chocolate ao leite", "Confetti"]
            },
        ]
    },



    pizzasEspeciais: {
        ingredientesGerais: ["Queijo Philadelphia", "Carne seca", "Queijo coalho", "Pimenta biquinho",
            "Camarão ao molho branco", "Costela bovina desfiada", "Strogonoff de carne", "Batata palha"
            , "Strogonoff de frango", "Peito de peru", "Brócolis", "Pepperoni", "Parmesão",
            "Cream cheese", "Ruffles",
            "Doritos"],

        pizzas: [
            {
                nome: "Nordestina",
                ingredientes: ["Queijo Philadelphia", "Carne seca", "Cebola", "Queijo coalho", "Cebolinha", "Pimenta biquinho"]
            },
            {
                nome: "Camarão",
                ingredientes: ["Camarão ao molho branco", "Muçarela"]
            },
            {
                nome: "Costela",
                ingredientes: ["Costela bovina desfiada", "Muçarela"]
            },
            {
                nome: "Strogonoff de Carne",
                ingredientes: ["Strogonoff de carne", "Muçarela", "Batata palha"]
            },
            {
                nome: "Strogonoff de Frango",
                ingredientes: ["Strogonoff de frango", "Muçarela", "Batata palha"]
            },

            {
                nome: "Premium Cream Cheese",
                ingredientes: ["Presunto", "Frango", "Ervilha", "Cream cheese", "Catupiry", "Muçarela", "Bacon"]
            },
            {
                nome: "Peito de Peru Especial",
                ingredientes: ["Peito de peru", "Brócolis", "Cebola", "Milho", "Queijo Philadelphia"]
            },
            {
                nome: "Pepperoni",
                ingredientes: ["Muçarela", "Pimentão", "Pepperoni", "Parmesão"]
            },
            {
                nome: "Francesa do Pizzaiolo",
                ingredientes: ["Presunto", "Ovo", "Catupiry", "Muçarela", "Bacon"]
            },
            {
                nome: "Ruffles no Barbecue",
                ingredientes: ["Muçarela", "Ruffles", "Molho barbecue", "Cebolinha"]
            },
            {
                nome: "Mexicana Gourmet",
                ingredientes: ["Muçarela", "Doritos", "Cream cheese", "Cebolinha", "Pimenta biquinho"]
            },

        ]
    },



    pizzasVegetarianas: {
        ingredientesGerais: [
            "Abobrinha", "Parmesão", "Alho poró", "Pimenta biquinho", "Bacon", "Brócolis"
            , "Catupiry", "Escarola", "Palmito", "Champignon", "Tomate seco", "Rúcula", "Milho",
        ],

        pizzas: [
            {
                nome: "Abobrinha",
                ingredientes: ["Abobrinha", "Alho frito", "Muçarela", "Parmesão"]
            },
            {
                nome: "Alho Poró",
                ingredientes: ["Parmesão", "Alho poró", "Pimenta biquinho"]
            },
            {
                nome: "Brócolis",
                ingredientes: ["Brócolis", "Muçarela", "Bacon", "Alho frito"]
            },
            {
                nome: "Brócolis com Catupiry",
                ingredientes: ["Brócolis", "Catupiry", "Bacon", "Alho frito"]
            },
            {
                nome: "Escarola",
                ingredientes: ["Escarola", "Muçarela", "Bacon"]
            },
            {
                nome: "Palmito",
                ingredientes: ["Palmito", "Muçarela"]
            },
            {
                nome: "Siciliana",
                ingredientes: ["Champignon", "Bacon", "Muçarela"]
            },
            {
                nome: "Tomate Seco",
                ingredientes: ["Tomate seco", "Rúcula", "Muçarela"]
            },
            {
                nome: "Vegetariana",
                ingredientes: ["Muçarela", "Brócolis", "Escarola", "Palmito", "Milho", "Ervilha", "Cebola"]
            },
        ]
    },




    pizzasDeFrango: {
        ingredientesGerais: [
            "Peito de peru", "Brócolis", "Cebola", "Queijo Philadelphia",
            "Strogonoff de frango", "Batata palha", "Presunto",
            "Cream cheese", "Catupiry", "Bacon", "Ovo", "Calabresa",
            "Palmito"
        ],

        pizzas: [
            {
                nome: "Peito de Peru Especial",
                ingredientes: ["Peito de peru", "Brócolis", "Cebola", "Milho", "Queijo Philadelphia"]
            },
            {
                nome: "Strogonoff de Frango",
                ingredientes: ["Strogonoff de frango", "Muçarela", "Batata palha"]
            },

            {
                nome: "Premium Cream Cheese",
                ingredientes: ["Presunto", "Frango", "Ervilha", "Cream cheese", "Catupiry", "Muçarela", "Bacon"]
            },
            {
                nome: "Mais Sabor",
                ingredientes: ["Frango", "Ovo", "Catupiry", "Muçarela", "Bacon"]
            },
            {
                nome: "Caipira",
                ingredientes: ["Frango", "Cebola", "Milho", "Catupiry"]
            },
            {
                nome: "Frango com Queijo",
                ingredientes: ["Frango", "Muçarela"]
            },
            {
                nome: "Frango com Catupiry",
                ingredientes: ["Frango", "Catupiry"]
            },
            {
                nome: "Frango Philadelphia",
                ingredientes: ["Frango", "Queijo Philadelphia"]
            },
            {
                nome: "Nona",
                ingredientes: ["Frango", "Milho", "Calabresa", "Ervilha", "Cebola", "Muçarela"]
            },
            {
                nome: "Moda do Pizzaiolo",
                ingredientes: ["Frango", "Ervilha", "Milho", "Palmito", "Muçarela", "Bacon"]
            },
            {
                nome: "Peito de Peru",
                ingredientes: ["Peito de peru", "Muçarela"]
            },
            {
                nome: "Pizzaiolo",
                ingredientes: ["Frango", "Ervilha", "Palmito", "Muçarela", "Catupiry"]
            },
        ]
    },



    pizzasDeQueijo: {
        ingredientesGerais: [
            "Ruffles", "Molho barbecue", "Doritos", "Cream cheese",
            "Pimenta biquinho", "Provolone", "Catupiry", "Parmesão", "Gorgonzola",
            "Manjericão fresco", "Muçarela de búfala"
        ],

        pizzas: [
            {
                nome: "Ruffles no Barbecue",
                ingredientes: ["Muçarela", "Ruffles", "Molho barbecue", "Cebolinha"]
            },
            {
                nome: "Mexicana Gourmet",
                ingredientes: ["Muçarela", "Doritos", "Cream cheese", "Cebolinha", "Pimenta biquinho"]
            },
            {
                nome: "4 Queijos",
                ingredientes: ["Provolone", "Muçarela", "Catupiry", "Parmesão"]
            },
            {
                nome: "5 Queijos",
                ingredientes: ["Provolone", "Muçarela", "Catupiry", "Parmesão", "Gorgonzola"]
            },
            {
                nome: "Marguerita",
                ingredientes: ["Tomate", "Muçarela", "Manjericão fresco"]
            },
            {
                nome: "Muçarela",
                ingredientes: ["Muçarela"]
            },
            {
                nome: "Muçarela de Búfala",
                ingredientes: ["Muçarela de búfala"]
            },
            {
                nome: "Napolitana",
                ingredientes: ["Muçarela", "Parmesão", "Tomate"]
            },
        ]
    },



    pizzasDePeixe: {
        ingredientesGerais: [
            "Camarão ao molho branco", "Muçarela", "Atum", "Cebola", "Bacon", "Champignon",
            "Catupiry", "Presunto", "Palmito"
        ],

        pizzas: [
            {
                nome: "Camarão",
                ingredientes: ["Camarão ao molho branco", "Muçarela"]
            },
            {
                nome: "Atum",
                ingredientes: ["Atum", "Cebola"]
            },
            {
                nome: "Atum com Queijo",
                ingredientes: ["Atum", "Muçarela", "Bacon"]
            },
            {
                nome: "Jaguari",
                ingredientes: ["Atum", "Champignon", "Catupiry"]
            },
            {
                nome: "Romana",
                ingredientes: ["Presunto", "Atum", "Cebola", "Muçarela", "Bacon"]
            },
            {
                nome: "Veneza",
                ingredientes: ["Atum", "Palmito", "Muçarela"]
            },
        ]
    },



    pizzasCarnes: {
        ingredientesGerais: [
            "Ovo", "Presunto", "Pimentão", "Pepperoni",
            "Parmesão", "Camarão ao molho branco", "Costela bovina desfiada", "Strogonoff de carne",
            "Batata palha", "Carne seca", "Queijo coalho",
            "Pimenta biquinho", "Calabresa",
            "Lombo canadense", "Lombo", "Palmito", "Frango", "Provolone"
        ],

        pizzas: [
            {
                nome: "Francesa do Pizzaiolo",
                ingredientes: ["Presunto", "Ovo", "Catupiry", "Muçarela", "Bacon"]
            },
            {
                nome: "Pepperoni",
                ingredientes: ["Muçarela", "Pimentão", "Pepperoni", "Parmesão"]
            },
            {
                nome: "Camarão",
                ingredientes: ["Camarão ao molho branco", "Muçarela"]
            },
            {
                nome: "Costela",
                ingredientes: ["Costela bovina desfiada", "Muçarela"]
            },
            {
                nome: "Strogonoff de Carne",
                ingredientes: ["Strogonoff de carne", "Muçarela", "Batata palha"]
            },
            {
                nome: "Nordestina",
                ingredientes: ["Queijo Philadelphia", "Carne seca", "Cebola", "Queijo coalho", "Cebolinha", "Pimenta biquinho"]
            },
            {
                nome: "Bacon",
                ingredientes: ["Muçarela", "Bacon"]
            },
            {
                nome: "Baiana",
                ingredientes: ["Calabresa moída", "Cebola", "Ovos", "Molho de pimenta"]
            },
            {
                nome: "Bauru",
                ingredientes: ["Presunto", "Muçarela", "Tomate"]
            },
            {
                nome: "Fratelli",
                ingredientes: ["Calabresa", "Milho", "Muçarela", "Catupiry", "Bacon"]
            },
            {
                nome: "Calabresa",
                ingredientes: ["Calabresa", "Cebola"]
            },
            {
                nome: "Calabresa com Catupiry",
                ingredientes: ["Calabresa", "Catupiry"]
            },
            {
                nome: "Carne Seca",
                ingredientes: ["Carne seca", "Tomate", "Cebola", "Muçarela", "Bacon"]
            },
            {
                nome: "Cowboy",
                ingredientes: ["Calabresa", "Catupiry", "Tomate", "Bacon"]
            },
            {
                nome: "Dom Peppe",
                ingredientes: ["Calabresa moída", "Palmito", "Catupiry", "Muçarela", "Bacon"]
            },
            {
                nome: "Italiana",
                ingredientes: ["Frango", "Calabresa", "Catupiry", "Muçarela", "Bacon"]
            },
            {
                nome: "Lombo",
                ingredientes: ["Lombo canadense", "Muçarela"]
            },
            {
                nome: "Lombo Especial",
                ingredientes: ["Lombo", "Milho", "Muçarela", "Bacon", "Batata palha"]
            },
            {
                nome: "Moda I",
                ingredientes: ["Presunto", "Palmito", "Ervilha", "Muçarela", "Bacon"]
            },
            {
                nome: "Moda II",
                ingredientes: ["Presunto", "Calabresa moída", "Ovo", "Cebola", "Palmito", "Muçarela", "Bacon"]
            },
            {
                nome: "Moda da Casa",
                ingredientes: ["Brócolis", "Calabresa moída", "Muçarela", "Catupiry", "Bacon"]
            },
            {
                nome: "Portugal",
                ingredientes: ["Lombo", "Provolone", "Muçarela"]
            },
            {
                nome: "Portuguesa",
                ingredientes: ["Presunto", "Ovo", "Ervilha", "Cebola", "Muçarela"]
            },
            {
                nome: "Toscana",
                ingredientes: ["Cebola", "Calabresa", "Muçarela"]
            },
            {
                nome: "Tropicaliente",
                ingredientes: ["Lombo", "Palmito", "Catupiry", "Bacon"]
            },
        ]
    },
};

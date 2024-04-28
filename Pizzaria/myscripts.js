const pizzaPadrao = document.querySelector(".PizzaQueijoSeção")
const pizzas = [
    {
        Nome:"Pizza de Calabressa ",
        Foto:"Image/pizza_de_calabressa-removebg-preview.png"
    },
    {
        Nome:"Pizza de Margherita",
        Foto:"Image/Pizza de Margherita.png"
    },
    {
        Nome:"Pizza Portuguesa",
        Foto:"Image/pizza_portuguesa.png"
    },
    {
        Nome:"Pizza Vegetariana",
        Foto:"Image/Pizza vegetariana.png"
    },
    {
        Nome:"Pizza catupiry",
        Foto:"Image/Pizza de Catupiry.png"
    },
    {
        Nome:"Pizza Mediterrãnea",
        Foto:"Image/pizza mdeteranio.png"
    }
]
function criarPizza(pizza) {
    const pizzaClone = pizzaPadrao.cloneNode(true); // Clona o elemento padrão
    pizzaClone.querySelector("#pizzaQueijo img").src = pizza.Foto; // Modifica a imagem
    pizzaClone.querySelector("#pizzaQueijo p").textContent = pizza.Nome; // Modifica o texto
    pizzaPadrao.parentElement.appendChild(pizzaClone); // Adiciona o clone modificado ao DOM
}

// Itera sobre a lista de pizzas e cria clones para cada uma
pizzas.forEach(criarPizza);
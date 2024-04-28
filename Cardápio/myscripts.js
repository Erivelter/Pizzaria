const pizzaPadrao = document.querySelector(".PizzaSeção")
let contador = 1
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
    },
    {
        Nome:"Em breve mais",
        Foto:"Image/MaisIcone.png"
    }
]
function criarPizza(pizza) {
    const pizzaClone = pizzaPadrao.cloneNode(true); // Clona o elemento padrão
    const nomeFormatado = pizza.Nome.replace(/\s+/g, '').toLowerCase(); // Remove espaços e converte para minúsculas
    const pizzaSelector = `.PizzaQueijoSeção#${nomeFormatado}`; // Cria um seletor único para a pizza usando o nome
    const pizzaClasse = `${nomeFormatado}Secao`; // Cria uma classe única para a pizza usando o nome
    pizzaClone.classList.add(pizzaClasse);
    pizzaClone.id = nomeFormatado; // Define o ID do clone como o nome da pizza formatado
    pizzaClone.querySelector("#pizzaQueijo img").src = pizza.Foto; // Modifica a imagem
    pizzaClone.querySelector("#pizzaQueijo p").textContent = pizza.Nome; // Modifica o texto
    pizzaPadrao.parentElement.appendChild(pizzaClone); // Adiciona o clone modificado ao DOM

    // Agora você pode usar pizzaSelector para selecionar este clone específico no futuro
    const pizzaSelecionada = document.querySelector(pizzaSelector);
    // Faça o que precisar com a pizzaSelecionada...
}

// Itera sobre a lista de pizzas e cria clones para cada uma
pizzas.forEach(criarPizza);

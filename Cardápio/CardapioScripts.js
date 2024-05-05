const pizzaPadrao = document.querySelector(".PizzaSeção")
let contador = 1
const pizzas = [
        {
            Nome: "Pizza de Calabressa",
            Foto: "/Pizzaria/Image/pizza_de_calabressa-removebg-preview.png",
            TextoChamativo: "Uma pizza de calabressa, servida de maneira original com sabor único feita na hora.",
            Ingredientes: "Massa de pizza (farinha de trigo, água, fermento, sal, óleo), molho de tomate (tomates, cebola, alho, azeite de oliva, sal, pimenta), queijo mussarela (leite de vaca pasteurizado, fermento lácteo, coalho, sal), linguiça calabresa (carne suína, água, sal, especiarias, conservante), cebola (opcional), orégano (opcional), azeite de oliva (opcional).",
            Alergias: ["/Pizzaria/Image/icons8-queijo-96.png", "/Pizzaria/Image/icons8-vaca-96.png"]
        },
        {
            Nome: "Pizza de Margherita",
            Foto: "/Pizzaria/Image/Pizza de Margherita.png",
            TextoChamativo: "Uma deliciosa pizza de Margherita, com ingredientes frescos e sabor inigualável.",
            Ingredientes: "Massa de pizza (farinha de trigo, água, fermento, sal, óleo), molho de tomate (tomates, alho, azeite de oliva, sal, pimenta), queijo mussarela (leite de vaca pasteurizado, fermento lácteo, coalho, sal), folhas de manjericão fresco, azeite de oliva (opcional).",
            Alergias: ["/Pizzaria/Image/icons8-queijo-96.png", "/Pizzaria/Image/icons8-vaca-96.png"]
        },
        {
            Nome: "Pizza Portuguesa",
            Foto: "/Pizzaria/Image/pizza_portuguesa.png",
            TextoChamativo: "Uma pizza Portuguesa autêntica, com uma combinação perfeita de ingredientes.",
            Ingredientes: "Massa de pizza (farinha de trigo, água, fermento, sal, óleo), molho de tomate (tomates, cebola, alho, azeite de oliva, sal, pimenta), queijo mussarela (leite de vaca pasteurizado, fermento lácteo, coalho, sal), presunto, ovos cozidos, cebola, azeitonas, orégano.",
            Alergias: ["/Pizzaria/Image/icons8-queijo-96.png", "/Pizzaria/Image/icons8-ovo-96.png"]
        },
        {
            Nome: "Pizza Vegetariana",
            Foto: "/Pizzaria/Image/Pizza vegetariana.png",
            TextoChamativo: "Uma opção saudável e deliciosa, repleta de vegetais frescos e saborosos.",
            Ingredientes: "Massa de pizza (farinha de trigo, água, fermento, sal, óleo), molho de tomate (tomates, cebola, alho, azeite de oliva, sal, pimenta), queijo mussarela (leite de vaca pasteurizado, fermento lácteo, coalho, sal), abobrinha, berinjela, pimentão, cebola, cogumelos, azeitonas, orégano.",
            Alergias: ["/Pizzaria/Image/icons8-queijo-96.png", "/Pizzaria/Image/icons8-vegetariano-96.png"]
        },
        {
            Nome: "Pizza Catupiry",
            Foto: "/Pizzaria/Image/Pizza de Catupiry.png",
            TextoChamativo: "Uma pizza cremosa e irresistível, com o autêntico sabor do Catupiry.",
            Ingredientes: "Massa de pizza (farinha de trigo, água, fermento, sal, óleo), molho de tomate (tomates, cebola, alho, azeite de oliva, sal, pimenta), queijo mussarela (leite de vaca pasteurizado, fermento lácteo, coalho, sal), catupiry, azeitonas, orégano.",
            Alergias: ["/Pizzaria/Image/icons8-queijo-96.png", "/Pizzaria/Image/icons8-vaca-96.png"]
        },
        {
            Nome: "Pizza Mediterrânea",
            Foto: "/Pizzaria/Image/pizza mediterranea.png",
            TextoChamativo: "Uma jornada culinária até o Mediterrâneo, com sabores frescos e autênticos.",
            Ingredientes: "Massa de pizza (farinha de trigo, água, fermento, sal, óleo), molho de tomate (tomates, alho, azeite de oliva, sal, pimenta), queijo feta, azeitonas, tomate seco, manjericão fresco, orégano.",
            Alergias: ["/Pizzaria/Image/icons8-queijo-96.png", "/Pizzaria/Image/icons8-vegetariano-96.png"]
        },
        {
            Nome: "Em breve mais",
            Foto: "/Pizzaria/Image/MaisIcone.png",
            TextoChamativo: "Em breve mais opções incríveis para você experimentar. Aguarde!",
            Ingredientes: "Em breve mais informações.",
            Alergias: []
        },
    ];
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

    
    const pizzaSelecionada = document.querySelector(pizzaSelector);
    
}

// Itera sobre a lista de pizzas e cria clones para cada uma
pizzas.forEach(criarPizza);

const menu = document.getElementById("menu");

const menuMobile = document.getElementById("MobileMenu");
const menuTela = document.getElementById("menuTela");
// const Descricao = document.getElementById("DescrisaoPizza");
// BtnPizza.addEventListener("click",Pizza);
menu.addEventListener("click", btnMenu);
menuMobile.addEventListener("click", btnMenu);

function btnMenu() {
    // Verifica se o menu está atualmente visível
    if (menuTela.style.display === "flex") {
       
        menuTela.style.display = "none";
    } else {
        
        menuTela.style.display = "flex";
    }
}

// Seletor para todos os botões que mostram descrição
const btnMostrarDescricao = document.querySelectorAll('.PizzaSeção');

// Adiciona um evento de clique a cada botão
btnMostrarDescricao.forEach(btn => {
    btn.addEventListener('click', mostrarDescricao);
});


// Função para mostrar a descrição da pizza correspondente
function mostrarDescricao(event) {
    //A descrição padrão
    let descricaoInicial = {
    TextoChamativo: document.getElementById('TextoDescrisaoPizza').querySelector('h2').textContent,
    Ingredientes: document.getElementById('Ingredientes').querySelector('p').textContent
};//captura o id da pizza clicada
    const descricaoPizza = document.getElementById('DescrisaoPizza');
    let pizzaSelecionadaId = event.currentTarget.id;

    //verifica se a pizza é de queijo, pois a pizza de queijo é a padrão a qual não precisa está no json
    if (pizzaSelecionadaId === "pizzaDeQueijo") {
        
        descricaoPizza.querySelector('h2').textContent = "Uma pizza de queijo, servida de maneira original com sabor único feita na hora.";
        descricaoPizza.querySelector('p').textContent = "Ingredientes: Massa de pizza (farinha de trigo, água, fermento, sal, óleo), molho de tomate (tomates, cebola, alho, azeite de oliva, sal, pimenta), queijo mussarela (leite de vaca pasteurizado, fermento lácteo, coalho, sal), cebola (opcional), orégano (opcional), azeite de oliva (opcional).";
    } else {
        
        const pizzaSelecionada = pizzas.find(pizza => pizza.Nome.replace(/\s+/g, '').toLowerCase() === pizzaSelecionadaId);
         descricaoPizza.querySelector("#DescrisaoPizza img").src = pizzaSelecionada.Alergias;
        descricaoPizza.querySelector("#DescrisaoPizza img").src = "";
        descricaoPizza.querySelector('h2').textContent = pizzaSelecionada.TextoChamativo;
        descricaoPizza.querySelector('p').textContent = pizzaSelecionada.Ingredientes;
       
    }

    
    if (descricaoPizza.style.display === 'flex') {
        descricaoPizza.style.display = 'none';
    } else {
        descricaoPizza.style.display = 'flex';
    }
}

// Função para mostrar a descrição da pizza correspondente
function mostrarDescricao(event) {
    
    const descricaoPizza = document.getElementById('DescrisaoPizza');
    // Captura o id da pizza clicada
    const pizzaSelecionadaId = event.currentTarget.id;

    // Encontra a pizza correspondente pelo seu id
    const pizzaSelecionada = pizzas.find(pizza => pizza.Nome.replace(/\s+/g, '').toLowerCase() === pizzaSelecionadaId);

    // Verifica se a pizza selecionada existe
    if (pizzaSelecionada) {
    
        descricaoPizza.querySelector('h2').textContent = pizzaSelecionada.TextoChamativo;
        descricaoPizza.querySelector('p').textContent = pizzaSelecionada.Ingredientes;

        // Remove as imagens existentes antes de adicionar novas
        const imagensAlergias = descricaoPizza.querySelectorAll('#imgDescricaoPizza img');
        imagensAlergias.forEach(imagem => imagem.remove());

        // Adiciona as imagens de alergias, se houver
        if (pizzaSelecionada.Alergias.length > 0) {
            const imgDescricaoPizza = descricaoPizza.querySelector('#imgDescricaoPizza');
            pizzaSelecionada.Alergias.forEach(caminhoImagem => {
                const imgAlergia = document.createElement('img');
                imgAlergia.src = caminhoImagem.trim(); // Define o src com o caminho da imagem
                imgAlergia.alt = "Alergia"; // Define o texto alternativo da imagem
                imgDescricaoPizza.appendChild(imgAlergia);
            });
        }
    }

    // Alterna a visibilidade da descrição da pizza
    
    if (descricaoPizza.style.display === 'flex') {
        descricaoPizza.style.display = 'none';
    } else {
        descricaoPizza.style.display = 'flex';
    }
}

//Botões do menu

var BtnOfertas = document.getElementById("Ofertas");
BtnOfertas.addEventListener("click", Ofertas); // Remove the parentheses after Ofertas

function Ofertas() {
    window.location.href = "Pizzaria/Ofertas/ofertas.html";
}
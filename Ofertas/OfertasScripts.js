document.addEventListener("DOMContentLoaded", function() {
    const offerContainer = document.getElementById('offerContainer');

    // Array of offer details
    const offers = [
        { title: 'Pizza Especial', description: 'Por tempo limitado!', price: '$10.99', discount: '20%', img: '/Pizzaria/Image/Pizza de Catupiry.png' },
        { title: 'A que todos querem!', description: 'Para uma vida saudadevel.', price: '$XX.XX', discount: '5%', img: '/Pizzaria/Image/Pizza vegetariana.png' },
        { title: 'Escolha feita!', description: 'O classico das famílias.', price: '$XX.XX', discount: '35%', img: '/Pizzaria/Image/pizza_de_calabressa-removebg-preview.png' },
        { title: 'Direito para sua mesa', description: 'É só pedir.', price: '$XX.XX', discount: '70%', img: '/Pizzaria/Image/pizza_portuguesa.png' },
        { title: 'Combo Família', description: 'Descrição da oferta 5.', price: '$XX.XX', discount: 'XX%', img: '' }
    ];
    // Create offer containers dynamically
    offers.forEach(offer => {
        const container = document.createElement('div');
        container.classList.add('offer-container');

        const details = document.createElement('div');
        details.classList.add('offer-details');

        const title = document.createElement('h2');
        title.textContent = offer.title;

        const desc = document.createElement('p');
        desc.textContent = offer.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = 'Preço: ' + offer.price;

        const discount = document.createElement('p');
        discount.classList.add('discount');
        discount.textContent = 'Desconto: ' + offer.discount;

        const buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Comprar Agora';
        const img = document.createElement('img');
        img.src = offer.img;
        img.alt = offer.title;
        
        container.appendChild(img);
        details.appendChild(title);
        details.appendChild(desc);
        details.appendChild(price);
        details.appendChild(discount);
        details.appendChild(buyBtn);

        container.appendChild(details);

        offerContainer.appendChild(container);
    });
});
const menu = document.getElementById("menu");

const menuMobile = document.getElementById("MobileMenu");
const menuTela = document.getElementById("menuTela");

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
//Botões do menu

var BtnContatos = document.getElementById("Contatos");
BtnContatos.addEventListener("click", Contatos); 

function Contatos() {
    window.location.href = "/Pizzaria/Contatos/Contatos.html";
}
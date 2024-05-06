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
//Botões do menu

var BtnOfertas = document.getElementById("Ofertas");
BtnOfertas.addEventListener("click", Ofertas); // Remove the parentheses after Ofertas

function Ofertas() {
    window.location.href = "/Pizzaria/Ofertas/ofertas.html";
}
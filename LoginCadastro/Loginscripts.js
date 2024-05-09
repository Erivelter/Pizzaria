document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const menuMobile = document.getElementById("MobileMenu");
    const menuTela = document.getElementById("menuTela");

    menu.addEventListener("click", toggleMenu);
    menuMobile.addEventListener("click", toggleMenu);

    function toggleMenu() {
        if (menuTela.style.display === "flex") {
            menuTela.style.display = "none";
        } else {
            menuTela.style.display = "flex";
        }
    }
});
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const senha = formData.get('senha');

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        const { token } = await response.json();
        localStorage.setItem('token', token);
        window.location.href = '/menu.html'; // Redirecionar para a página do menu após o login bem-sucedido
    } catch (error) {
        console.error('Erro no login:', error);
        alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
});

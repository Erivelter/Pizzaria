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
document.getElementById('cadastroForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const senha = formData.get('senha');
    const tipo = formData.get('tipo');

    try {
        const response = await fetch('/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, senha, tipo })
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        alert('Usuário cadastrado com sucesso. Faça login para continuar.');
        window.location.href = '/login.html'; // Redirecionar para a página de login após o cadastro bem-sucedido
    } catch (error) {
        console.error('Erro no cadastro:', error);
        alert('Erro ao cadastrar usuário. Verifique os dados fornecidos e tente novamente.');
    }
});
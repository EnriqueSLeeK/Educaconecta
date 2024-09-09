const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
let isMenuVisible = false; // Variável para controlar a visibilidade do menu

// Função para alternar o estado visível do menu ao clicar
menuIcon.addEventListener('click', () => {
    if (isMenuVisible) {
        menu.style.display = 'none'; // Esconde o menu quando está visível
        isMenuVisible = false; // Define o menu como não visível
    } else {
        menu.style.display = 'block'; // Mostra o menu quando clicado
        isMenuVisible = true; // Define o menu como visível
    }
});

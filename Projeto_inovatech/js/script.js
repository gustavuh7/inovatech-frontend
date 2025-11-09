// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão e os links
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    // Adiciona um evento de clique ao botão
    toggleButton.addEventListener('click', (e) => {
        // Previne o comportamento padrão do link <a>
        e.preventDefault(); 
        
        // Adiciona/Remove a classe 'active'
        navbarLinks.classList.toggle('active');
    });
});
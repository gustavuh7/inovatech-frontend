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



function validarFormulario() {
const nome = document.getElementById('nome').value.trim();
const email = document.getElementById('email').value.trim();
const telefone = document.getElementById('telefone').value.trim();
const motivo = document.getElementById('motivo').value.trim();


const campos = [{ valor: nome, nome: 'Nome', elemento: document.getElementById('nome') },{ valor: email, nome: 'Email', elemento: document.getElementById('email') },{ valor: telefone, nome: 'Telefone', elemento: document.getElementById('telefone') },{ valor: motivo, nome: 'Motivo', elemento: document.getElementById('motivo')}];

let camposVazios = [];
let todosPreenchidos = true;

campos.forEach(campo => {
    if (!campo.valor) {
        camposVazios.push(campo.nome);
        todosPreenchidos = false;
        campo.elemento.style.borderColor = '#ff0000';
    } else {
        campo.elemento.style.borderColor = '#16bac5';
    }
});

if(!encontrou.value){
    encontrou = 'Não informado';
}else{
    encontrou = document.getElementById('encontrou').value;
}


if (!todosPreenchidos) {
    alert('Por favor, preencha todos os campos obrigatórios:\n- ' + camposVazios.join('\n- '));
    return false;
}

document.getElementById('formContato').submit();
return true;
}

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

    emailjs.init("aA52K3lFSlt-dgsBW");

    document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();


    const botao = document.querySelector('.botao');
    botao.disabled = true;
    botao.textContent = 'Enviando...';
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        motivo: document.getElementById('motivo').value,
        encontrou : document.getElementById('encontrou').value || 'Não informado',
    };

    const serviceID = "service_1tx565h";
    const templateID = "template_9tl15nl";

    emailjs.send(serviceID, templateID, formData)
        .then(()=> {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('formContato').reset();
            botao.disabled = false;
            botao.textContent = 'Enviar';
            alert('Informações enviadas: \n' + 'Nome: '+ formData.nome + '\n' + 'Email: ' + formData.email + '\n' + 'Telefone: ' + formData.telefone + '\n' + 'Motivo: ' + formData.motivo + '\n' + 'Onde encontrou: ' + formData.encontrou);
        })
        .catch((error) => {
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.', error);
        })
        .finally(() => {
            botao.textContent = 'Enviar';
        });
    });



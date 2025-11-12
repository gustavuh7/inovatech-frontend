# Projeto Landing Page - Inovatech

![Badge do Projeto](https://img.shields.io/badge/Projeto-Trainee%20Educacional-104547)

Esta é a landing page do projeto **Inovatech**, um site institucional de página única (SPA) desenvolvido como um **projeto trainee com fins educativos**.

O site apresenta a empresa, seus serviços, pilares e uma equipe, e inclui um formulário de contato funcional. O projeto é totalmente responsivo e foi construído utilizando HTML5, CSS3 e JavaScript (Vanilla JS).

## ✨ Funcionalidades Principais

* **Design Responsivo:** O layout se adapta a telas de desktops, tablets e celulares, com pontos de quebra (`@media`) definidos para garantir a usabilidade.
* **Menu Hambúrguer (Mobile):** Em telas menores (até 768px), o menu de navegação é substituído por um ícone "hambúrguer". Ao ser clicado, ele exibe os links de navegação em formato de coluna.
* **Navegação Suave (Smooth Scroll):** Clicar nos links da `navbar` (ex: "Sobre", "Serviços") rola a página suavemente até a seção correspondente.
* **Formulário de Contato Funcional:** A seção "Fale Conosco" possui um formulário que captura os dados e os envia diretamente para um e-mail configurado, utilizando a biblioteca **EmailJS**, sem a necessidade de um backend.
* **Feedback de Envio:** O botão de envio do formulário fica desabilitado e exibe o texto "Enviando..." durante o processo de envio para evitar cliques duplicados.

## 📂 Estrutura da Página

O site é composto pelas seguintes seções:

1.  **Header (Cabeçalho):** Navegação principal com logo, links e botão de menu mobile. É fixo no topo (`position: sticky`).
2.  **Home (`#Home`):** Seção "hero" de apresentação inicial.
3.  **Quem Somos (`#Sobre`):** Apresenta a missão da empresa e os membros da equipe (Presidentes, Diretoras).
4.  **Nossos Pilares:** Um grid de 6 colunas destacando os valores da Inovatech.
5.  **Nossos Parceiros (`#Parceiros`):** Exibição dos logos das empresas parceiras.
6.  **Nossos Serviços (`#Serviços`):** Cards que descrevem os serviços prestados (Planilhas, Chatbots, Cybersegurança).
7.  **Fale Conosco:** Formulário de contato com campos de nome, email, telefone, mensagem e "onde nos encontrou".
8.  **Nossos contatos (`#Contato`):** Links diretos para LinkedIn, Email, WhatsApp e Instagram.
9.  **Rodapé:** Contém o logo, endereço, links de redes sociais e a tagline do projeto.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura semântica do site.
* **CSS3:** Para toda a estilização, layouts (Flexbox e Grid), responsividade e animações.
    * **Google Fonts:** Fonte 'Jost'.
* **JavaScript (Vanilla JS):** Para a interatividade do menu mobile e a lógica de envio do formulário.
* **EmailJS:** Serviço de terceiros para permitir o envio de e-mails pelo formulário diretamente do front-end.

## 🚀 Como Executar

Este é um projeto front-end estático. Não é necessária nenhuma instalação de dependência.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd nome-do-repositorio
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

## ⚙️ Configuração (Formulário de Contato)

Para que o formulário de contato funcione, você precisa criar uma conta gratuita no [EmailJS](https://www.emailjs.com/) e substituir as chaves no arquivo `js/script.js`.

1.  Crie uma conta no EmailJS.
2.  Adicione um novo serviço (ex: "Gmail").
3.  Crie um novo template de e-mail.
4.  Obtenha sua **Public Key** (antiga User ID), **Service ID** e **Template ID**.

5.  No arquivo `js/script.js`, substitua os valores:

    ```javascript
    // Substitua pela sua Public Key
    emailjs.init("aA52K3lFSlt-dgsBW"); 
    
    // ...
    
    // Substitua pelo seu Service ID
    const serviceID = "service_1tx565h"; 
    
    // Substitua pelo seu Template ID
    const templateID = "template_9tl15nl";
    ```

## GitPage

[Gitpage](https://gustavuh7.github.io/inovatech-frontend/)

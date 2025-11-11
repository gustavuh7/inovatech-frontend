document.addEventListener('DOMContentLoaded', function() {
    setupContactLinks();
    setupImageHandling();
});

function setupContactLinks() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (!this.href) {
                e.preventDefault();
            }
        });

        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

function setupImageHandling() {
    const images = document.querySelectorAll('.partner img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Erro ao carregar imagem:', this.alt);
            this.style.opacity = '0.5';
        });

        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
}

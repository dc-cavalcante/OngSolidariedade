function closeModal() {
    const modal = document.getElementById('action-modal');
    if (modal) {
        modal.classList.add('hidden-modal');
        document.body.style.overflow = ''; 
    }
}

function openModal(title, message, titleColor, messageColor, showCloseButton = false) {
    const modal = document.getElementById('action-modal');
    const modalContentElement = modal.querySelector('.custom-modal-content');
    
    modalContentElement.innerHTML = `
        <h3 id="modal-title"></h3>
        <p id="modal-message"></p>
        <button id="modal-close-btn" class="button-primary" style="${showCloseButton ? '' : 'display: none;'}">OK, ENTENDIDO</button>
        <div id="modal-extra-actions"></div>
    `;
    
    const currentTitle = document.getElementById('modal-title');
    const currentMessage = document.getElementById('modal-message');

    currentTitle.textContent = title;
    currentMessage.textContent = message;
    
    currentTitle.style.color = titleColor;
    currentMessage.style.color = messageColor;

    modal.classList.remove('hidden-modal');
    document.body.style.overflow = 'hidden'; 
    
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) { 
            closeModal();
        }
    });
}

export function registerForProject(projectName, container) {
    localStorage.setItem('project_' + projectName, 'subscribed'); 
    container.innerHTML = `<span class="tag tag-secondary">JÁ INSCRITO NESTE PROJETO</span>`;

    openModal(
        'Inscrição Confirmada!',
        `Parabéns! Você está inscrito no projeto: ${projectName}. Obrigado! Entraremos em contato em breve.`,
        'var(--color-secondary-900)',
        'var(--color-neutral-900)',
        true 
    );
    
    document.getElementById('modal-extra-actions').innerHTML = `
        <a href="#projetos" class="button-secondary" id="modal-project-redirect">Ver Outros Projetos</a>
    `;
    
    document.getElementById('modal-project-redirect').addEventListener('click', closeModal);
}

export function openPreActionModal(projectName, container) {
    
    openModal(
        'Inscrição para o projeto:',
        'Você já possui cadastro em nosso site?',
        'var(--color-secondary-500)',
        'var(--color-neutral-700)',
        false
    );

    
    document.getElementById('modal-extra-actions').innerHTML = `
        <div class="modal-buttons-group">
            <button class="button-primary js-modal-yes" id="modal-action-yes">Sim, me voluntariar</button>
            <button class="button-secondary js-modal-no" id="modal-action-no">Não, ir para o cadastro</button>
        </div>
    `;
    
    
    document.getElementById('modal-action-yes').addEventListener('click', function() {
        closeModal();
        const userIsRegistered = localStorage.getItem('user_status') === 'not_registered';
        
        if (userIsRegistered) {
            
            registerForProject(projectName, container);
        } else {
          
            window.location.hash = 'cadastro';
        }
    });
    
    document.getElementById('modal-action-no').addEventListener('click', function() {
        closeModal();
       
        window.location.hash = 'cadastro';
    });
}

export function initializeProjectPage() {
    const actionContainers = document.querySelectorAll('.volunteer-actions');
    
    if (!localStorage.getItem('user_status')) {
        localStorage.setItem('user_status', 'not_registered'); 
    }
    
    if (actionContainers.length > 0) {
        actionContainers.forEach(container => {
            const projectName = container.getAttribute('data-project-name');
            const isProjectSubscribed = localStorage.getItem('project_' + projectName) === 'subscribed';
            
            if (isProjectSubscribed) {
                container.innerHTML = `<span class="tag tag-secondary">JÁ INSCRITO NESTE PROJETO</span>`;
                return;
            }

            const btnVoluntariar = container.querySelector('.js-action-voluntariar');
            const btnCadastro = container.querySelector('.js-action-cadastro');
            
            if (btnVoluntariar) {
                btnVoluntariar.addEventListener('click', function() {
                    openPreActionModal(projectName, container); 
                });
            }
            
            if (btnCadastro) {
                 btnCadastro.addEventListener('click', function() {
                    window.location.hash = 'cadastro';
                 });
            }
        });
    }
}
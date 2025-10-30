function initializeProjectPage() {
    const actionContainers = document.querySelectorAll('.volunteer-actions');

    if (!localStorage.getItem('user_status')) {
        localStorage.setItem('user_status', 'not_registered'); 
    }
    const userIsRegistered = localStorage.getItem('user_status') === 'registered';

    const modal = document.getElementById('action-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalExtraActions = document.getElementById('modal-extra-actions');
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) { 
                closeModal();
            }
        });
    }

    function openModal(title, message, isError = false) {
        const modalContentElement = modal.querySelector('.custom-modal-content');
        
        modalContentElement.innerHTML = `
            <h3 id="modal-title"></h3>
            <p id="modal-message"></p>
            <div id="modal-extra-actions"></div>
        `;
        
        const currentTitle = document.getElementById('modal-title');
        const currentMessage = document.getElementById('modal-message');

        currentTitle.textContent = title;
        currentMessage.textContent = message;
        
        if (isError) {
            currentTitle.style.color = 'var(--color-primary-900)';
        } else {
            currentTitle.style.color = 'var(--color-secondary-900)';
        }

        modal.classList.remove('hidden-modal');
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        if (modal) {
            modal.classList.add('hidden-modal');
            document.body.style.overflow = ''; 
        }
    }

    function registerForProject(projectName, container) {
        localStorage.setItem('project_' + projectName, 'subscribed'); 
        container.innerHTML = `<span class="tag tag-secondary">JÁ INSCRITO NESTE PROJETO</span>`;

        openModal(
            'Inscrição Confirmada!',
            `Parabéns! Você está inscrito no projeto: ${projectName}. Obrigado! Entraremos em contato em breve.`
        );
        
        modalExtraActions.innerHTML = `
            <a href="#projetos" class="button-secondary" id="modal-project-redirect">Ver Outros Projetos</a>
        `;
        
        document.getElementById('modal-project-redirect').addEventListener('click', closeModal);
    }

    function openPreActionModal(projectName, container) {
    const modal = document.getElementById('action-modal');
    
    openModal(
        'Inscrição para o projeto:',
        'Você já possui cadastro em nosso site?',
        false 
    );

    const currentTitle = document.getElementById('modal-title');
    const currentMessage = document.getElementById('modal-message');
    
   

    currentTitle.style.color = 'var(--color-secondary-900)';
    currentMessage.style.color = 'var(--color-neutral-700)';

    
    document.getElementById('modal-extra-actions').innerHTML = `
        <div class="modal-buttons-group">
            <button class="button-primary js-modal-yes" id="modal-action-yes">Sim, me voluntariar</button>
            <button class="button-secondary js-modal-no" id="modal-action-no">Não, ir para o cadastro</button>
        </div>
    `;
    
    
    document.getElementById('modal-action-yes').addEventListener('click', function() {
        closeModal();
        const userIsRegistered = localStorage.getItem('user_status') === 'registered';
        
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
}
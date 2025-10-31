import { PAGE_TEMPLATES } from './template.js';
import { initializeFormValidation } from './cadastro.js';
import { initializeProjectPage, registerForProject, openPreActionModal } from './projetos.js';

const appContainer = document.getElementById('app-container');
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const themeKey = 'app-theme';

function applyTheme(themeName) {
    if (themeName === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem(themeKey, 'dark');
       
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem(themeKey, 'light');
    }
}

const savedTheme = localStorage.getItem(themeKey);
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme('light'); 
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}

function renderPage(pageName) {
    const pageData = PAGE_TEMPLATES[pageName] || PAGE_TEMPLATES['index'];
    
    appContainer.innerHTML = `<div id="loading-indicator">Carregando...</div>`;

    if (!pageData) {
        appContainer.innerHTML = `<div id="loading-indicator">Página não encontrada!</div>`;
        document.title = `Erro - ONG Solidariedade`;
        return;
    }
    
    document.title = `${pageData.title} - ONG Solidariedade`;

    setTimeout(() => {
        appContainer.innerHTML = pageData.content;
        
        if (pageName === 'cadastro' && typeof initializeFormValidation === 'function') {
             initializeFormValidation(); 
        }
        
        if (pageName === 'projetos' && typeof initializeProjectPage === 'function') {
             initializeProjectPage(); 
        }

    }, 300);
}

document.addEventListener('click', function(e) {
    
    const clickedButton = e.target.closest('.js-action-voluntariar, .js-action-cadastro');
    
    if (clickedButton) {
        e.preventDefault();
        
        const userIsRegistered = localStorage.getItem('user_status') === 'registered';

        const container = clickedButton.closest('.volunteer-actions');
        const projectName = container ? container.getAttribute('data-project-name') : '';
        
        
        if (clickedButton.classList.contains('js-action-cadastro')) {
            window.location.hash = 'cadastro';
            return;
        } 
        
        if (clickedButton.classList.contains('js-action-voluntariar')) {
            
            if (userIsRegistered) {
                registerForProject(projectName, container); 
            } else {
                openPreActionModal(projectName, container); 
            }
        }
    }
});

function handleRouting() {
    const hash = window.location.hash.substring(1);
    const pageName = hash || 'index';
    renderPage(pageName);
}

window.addEventListener('hashchange', handleRouting);
handleRouting();

document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('index.html') || href.endsWith('.html')) {
            e.preventDefault();
            const page = href.split('/').pop().split('.')[0]; 
            window.location.hash = page; 
        }
    });
});
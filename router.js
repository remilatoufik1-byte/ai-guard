import { renderHomePage } from './components/home_page.js';
import { renderArticlesPage } from './components/articles_page.js';
import { renderQuizPage } from './components/quiz_page.js';
import { renderForumPage } from './components/forum_page.js';

const appContainer = document.getElementById('app');

const routes = {
    '/': renderHomePage,
    '/articles': renderArticlesPage,
    '/quiz': renderQuizPage,
    '/forum': renderForumPage,
};

function setActiveLink(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

export function handleRouting() {
    const path = window.location.pathname;
    const renderFunction = routes[path] || routes['/']; // Fallback to home
    
    appContainer.innerHTML = ''; // Clear previous content
    const content = renderFunction();
    if (typeof content === 'string') {
        appContainer.innerHTML = content;
    } else {
        appContainer.appendChild(content);
    }
    
    appContainer.classList.add('page-fade-in');
    setTimeout(() => appContainer.classList.remove('page-fade-in'), 500);

    lucide.createIcons();
    setActiveLink(path);
    window.scrollTo(0, 0);


    if (path === '/quiz') {

        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            renderQuizPage(true); // Special call to re-init listeners
        }
    }
}

export function navigate(path) {
    window.history.pushState({}, '', path);
    handleRouting();
}

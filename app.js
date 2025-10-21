import { handleRouting, navigate } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();


    handleRouting();


    document.body.addEventListener('click', e => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const path = link.getAttribute('href');
            navigate(path);
        }
    });


    window.addEventListener('popstate', handleRouting);
    

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


        mobileMenu.addEventListener('click', (e) => {
            if (e.target.closest('.nav-link')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});

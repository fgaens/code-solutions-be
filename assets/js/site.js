const siteScript = document.querySelector('script[data-root]');
const root = siteScript.dataset.root;
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu');

document.querySelectorAll('.article-body pre').forEach((block) => {
    block.tabIndex = 0;
});

if (menuToggle && menu) {
    menuToggle.closest('.site-header').classList.add('is-enhanced');
    menuToggle.hidden = false;
    menu.classList.add('is-collapsible');

    function closeMenu() {
        menuToggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
    }

    menuToggle.addEventListener('click', () => {
        const open = menuToggle.getAttribute('aria-expanded') !== 'true';
        menuToggle.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('is-open', open);
    });
    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            menuToggle.focus();
        }
    });
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.site-nav')) closeMenu();
    });
    window.matchMedia('(min-width: 960px)').addEventListener('change', closeMenu);
}

document.querySelectorAll('[data-language-switch]').forEach((link) => {
    link.addEventListener('click', () => {
        const url = new URL(link.href);
        if (!url.hash) {
            url.hash = window.location.hash;
            link.href = url.href;
        }
        document.cookie = `language_redirect=true; path=${root || '/'}; SameSite=Lax`;
    });
});

if (window.location.pathname === `${root}/` &&
    navigator.language.startsWith('nl') &&
    !document.cookie.split(';').some((cookie) => cookie.trim() === 'language_redirect=true')) {
    document.cookie = `language_redirect=true; path=${root || '/'}; SameSite=Lax`;
    window.location.replace(`${root}/nl/${window.location.hash}`);
}

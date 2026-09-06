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

const demoTabs = Array.from(document.querySelectorAll('.demo-tab'));

if (demoTabs.length) {
    const demoPanels = demoTabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
    let demoObserver = null;

    function loadDemo(panel) {
        const viewport = panel.querySelector('.demo-viewport');
        if (!viewport || viewport.querySelector('iframe')) return;

        if (demoObserver) {
            demoObserver.disconnect();
            demoObserver = null;
        }

        const status = viewport.querySelector('.demo-status');
        if (status) status.textContent = viewport.dataset.demoLoading;

        const frame = document.createElement('iframe');
        frame.title = viewport.dataset.demoTitle;
        frame.addEventListener('load', () => {
            viewport.classList.add('is-live');
            if (status) status.textContent = '';
        });
        frame.src = viewport.dataset.demoSrc;
        viewport.appendChild(frame);
    }

    function selectedDemoIndex() {
        const index = demoTabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
        return index === -1 ? 0 : index;
    }

    function selectDemo(index, moveFocus) {
        demoTabs.forEach((tab, position) => {
            const active = position === index;
            tab.setAttribute('aria-selected', String(active));
            tab.tabIndex = active ? 0 : -1;
            demoPanels[position].hidden = !active;
        });
        loadDemo(demoPanels[index]);
        if (moveFocus) demoTabs[index].focus();
    }

    demoTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectDemo(index, false));
        tab.addEventListener('keydown', (event) => {
            const steps = { ArrowLeft: -1, ArrowRight: 1 };
            if (event.key === 'Home' || event.key === 'End') {
                event.preventDefault();
                selectDemo(event.key === 'Home' ? 0 : demoTabs.length - 1, true);
            } else if (event.key in steps) {
                event.preventDefault();
                selectDemo((index + steps[event.key] + demoTabs.length) % demoTabs.length, true);
            }
        });
    });

    const demoSection = document.getElementById('demos');

    if (demoSection && 'IntersectionObserver' in window) {
        demoObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) loadDemo(demoPanels[selectedDemoIndex()]);
        }, { rootMargin: '200px 0px' });
        demoObserver.observe(demoSection);
    } else {
        loadDemo(demoPanels[selectedDemoIndex()]);
    }
}

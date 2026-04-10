// ============================================================
// main.js — LibrAspire
// Shared script untuk semua halaman
// Fitur: Navbar aktif otomatis, Hamburger menu mobile
// ============================================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

function initHamburgerMenu() {
    const header = document.querySelector('.main-header .container');
    const navbar = document.querySelector('.navbar');
    if (!header || !navbar) return;

    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger-btn');
    hamburger.setAttribute('aria-label', 'Toggle navigation');
    hamburger.innerHTML = '&#9776;';
    header.appendChild(hamburger);

    const style = document.createElement('style');
    style.textContent = `
        .hamburger-btn {
            display: none;
            background: none;
            border: 2px solid var(--color-accent-dark);
            color: var(--color-accent-dark);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.3rem 0.6rem;
            line-height: 1;
        }
        @media (max-width: 768px) {
            .hamburger-btn { display: block; }
            .navbar {
                display: none !important;
                width: 100%;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem 0;
                border-top: 1px dashed var(--color-accent-light);
                margin-top: 0.5rem;
            }
            .navbar.open { display: flex !important; }
        }
    `;
    document.head.appendChild(style);

    hamburger.addEventListener('click', function(event) {
        navbar.classList.toggle('open');
        hamburger.innerHTML = navbar.classList.contains('open') 
            ? '&#10005;' 
            : '&#9776;';
        event.stopPropagation();
    });

    document.addEventListener('click', function() {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            hamburger.innerHTML = '&#9776;';
        }
    });
}

setActiveNavLink();
initHamburgerMenu();
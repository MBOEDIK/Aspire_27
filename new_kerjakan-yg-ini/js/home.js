// ============================================================
// home.js — LibrAspire
// Khusus halaman home.html
// Fitur: Scroll Reveal (Up & Down), Animasi Statistik, Animasi Kategori
// ============================================================

function initScrollReveal() {
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
            will-change: transform, opacity;
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-group > *:nth-child(1) { transition-delay: 0.1s; }
        .reveal-group > *:nth-child(2) { transition-delay: 0.2s; }
        .reveal-group > *:nth-child(3) { transition-delay: 0.3s; }
        .reveal-group > *:nth-child(4) { transition-delay: 0.4s; }
        .reveal-group > *:nth-child(5) { transition-delay: 0.5s; }
        .reveal-group > *:nth-child(6) { transition-delay: 0.6s; }
    `;
    document.head.appendChild(style);

    const revealTargets = document.querySelectorAll(
        '.section-title, .book-card, .step, .stat-item, .category-item'
    );
    revealTargets.forEach(el => el.classList.add('reveal'));

    const groups = document.querySelectorAll('.books-grid, .categories-list, .stats-grid');
    groups.forEach(el => el.classList.add('reveal-group'));

    const observer = new IntersectionObserver(
        function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Masuk ke layar (Scroll Down/Up)
                    entry.target.classList.add('visible');
                } else {
                    // Keluar dari layar (Scroll Down/Up)
                    // Kita cek posisi rect untuk memastikan animasi reset hanya saat benar-benar diluar viewport
                    const rect = entry.target.getBoundingClientRect();
                    if (rect.top > window.innerHeight || rect.bottom < 0) {
                        entry.target.classList.remove('visible');
                    }
                }
            });
        },
        { threshold: 0.1 }
    );

    revealTargets.forEach(el => observer.observe(el));
}

function animateCounter(element, target, duration) {
    let startTime = null;
    const suffix = element.dataset.suffix || '';

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        element.textContent = current.toLocaleString('id-ID') + suffix;
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

function initStatisticsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-item strong');
    if (statNumbers.length === 0) return;

    statNumbers.forEach(el => {
        const originalText = el.textContent.trim();
        const numericValue = parseInt(originalText.replace(/[^0-9]/g, ''));
        const suffix = originalText.replace(/[0-9.,]/g, '').trim();
        el.dataset.suffix = suffix;
        
        // Simpan state agar animasi angka tidak reset terus menerus (opsional)
        // Jika ingin angka reset juga saat scroll up, hapus logika 'animated' ini
        let animated = false;

        const observer = new IntersectionObserver(
            function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        animateCounter(el, numericValue, 2000);
                        animated = true; // Angka hanya berhitung sekali agar tidak pusing
                    } else if (!entry.isIntersecting) {
                        animated = false; // Reset jika ingin angka berhitung ulang setiap scroll balik
                        el.textContent = '0' + suffix;
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
    });
}

function initCategoryAnimation() {
    const categoryItems = document.querySelectorAll('.category-item');
    if (categoryItems.length === 0) return;

    const style = document.createElement('style');
    style.textContent = `
        .category-item {
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }
        .category-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: -100%;
            width: 100%;
            height: 3px;
            background-color: var(--color-accent-dark);
            transition: left 0.3s ease;
        }
        .category-item:hover::after {
            left: 0;
        }
        .category-item:hover {
            color: var(--color-accent-dark) !important;
            letter-spacing: 0.5px;
            transition: color 0.2s ease, letter-spacing 0.2s ease;
        }
    `;
    document.head.appendChild(style);

    categoryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = item.textContent.split(' (')[0].trim();
            window.location.href = `catalog.html?category=${encodeURIComponent(categoryName)}`;
        });
    });
}

// Jalankan semua fitur
initScrollReveal();
initStatisticsAnimation();
initCategoryAnimation();
// ============================================================
// about.js — LibrAspire (Optimized & Consolidated)
// Fitur: Full Scroll Reveal (Up & Down), Parallax, Team Interaction, & Counter
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. INJEKSI STYLE ---
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        /* Base Reveal States */
        .reveal-left { opacity: 0; transform: translateX(-50px); transition: all 0.8s ease-out; }
        .reveal-right { opacity: 0; transform: translateX(50px); transition: all 0.8s ease-out; }
        .reveal-up { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
            transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
            will-change: transform, opacity;
        }
        
        /* Active State */
        .reveal-visible { opacity: 1; transform: translateX(0) translateY(0) scale(1); }

        /* Smooth Enhancements */
        .team-member { transition: all 0.3s ease; }
        .member-img { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .about-image img { transition: transform 0.1s linear; }

        /* Mission Card Hover */
        .mission-vision .card:hover {
            transform: translateY(-10px) !important;
            box-shadow: 8px 8px 0px var(--color-accent-dark) !important;
            border-color: var(--color-accent-dark);
            border-left: 10px solid var(--color-accent-dark) !important;
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(styleSheet);

    // --- 2. GLOBAL SCROLL REVEAL (Story & Vision Mission) ---
    const imgHistory = document.querySelector('.about-image');
    const textHistory = document.querySelector('.about-text');
    const missionCards = document.querySelectorAll('.mission-vision .card');

    // Inisialisasi Class Awal
    if(imgHistory) imgHistory.classList.add('reveal-left');
    if(textHistory) textHistory.classList.add('reveal-right');
    missionCards.forEach((card, index) => {
        card.classList.add('reveal-up');
        card.style.transitionDelay = `${index * 0.2}s`;
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Saat elemen masuk ke layar
                entry.target.classList.add('reveal-visible');
            } else {
                // Saat elemen keluar dari layar (Scroll Up atau Down)
                const rect = entry.target.getBoundingClientRect();
                // Hapus class agar animasi bisa dipicu kembali
                if (rect.top > window.innerHeight || rect.bottom < 0) {
                    entry.target.classList.remove('reveal-visible');
                }
            }
        });
    }, { 
        threshold: 0.15 
    });

    // Jalankan Observer pada elemen Story dan Visi Misi
    if(imgHistory) revealObserver.observe(imgHistory);
    if(textHistory) revealObserver.observe(textHistory);
    missionCards.forEach(card => revealObserver.observe(card));


    // --- 3. PARALLAX EFFECT (Who We Are Image) ---
    const storyImg = document.querySelector('.about-image img');
    if (storyImg) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            storyImg.style.transform = `translateY(${scrollValue * 0.05}px)`;
        });
    }

    // --- 4. TEAM INTERACTION (The Curators) ---
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        const imgCircle = member.querySelector('.member-img');
        if (!imgCircle) return;
        
        const originalText = imgCircle.textContent;

        member.addEventListener('mouseenter', () => {
            imgCircle.style.backgroundColor = 'var(--color-accent-dark)';
            imgCircle.style.color = 'var(--color-bg-secondary)';
            imgCircle.style.transform = 'scale(1.1) rotate(10deg)';
            imgCircle.textContent = '👋';
        });

        member.addEventListener('mouseleave', () => {
            imgCircle.style.backgroundColor = 'var(--color-bg-tertiary)';
            imgCircle.style.color = 'var(--color-accent-dark)';
            imgCircle.style.transform = 'scale(1) rotate(0deg)';
            imgCircle.textContent = originalText;
        });
    });

    // --- 5. COUNT-UP ANIMATION (12.000 Titles) ---
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs.forEach(p => {
        if (p.innerHTML.includes('12.000')) {
            p.innerHTML = p.innerHTML.replace(
                '12.000', 
                '<span class="count-up" style="font-weight:bold; color:var(--color-accent-dark)">0</span>'
            );

            const countSpan = p.querySelector('.count-up');
            const countObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const end = 12000;
                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            countSpan.textContent = '12.000';
                            clearInterval(timer);
                        } else {
                            countSpan.textContent = Math.floor(start).toLocaleString('id-ID');
                        }
                    }, 16);
                    countObserver.unobserve(entries[0].target);
                }
            }, { threshold: 0.5 });
            countObserver.observe(countSpan);
        }
    });
});
// ============================================================
// catalog.js — LibrAspire
// Fitur: Real-time Search & Category Filter
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box .btn');
    const bookCards = document.querySelectorAll('.book-card');

    // 1. Fungsi Pencarian Real-time
    const filterBooks = () => {
        const query = searchInput.value.toLowerCase().trim();

        bookCards.forEach(card => {
            const title = card.querySelector('.book-title').textContent.toLowerCase();
            const author = card.querySelector('.book-author').textContent.toLowerCase();
            
            if (title.includes(query) || author.includes(query)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.4s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Event listener untuk mengetik
    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }

    // 2. Handle Filter Kategori dari URL (Jika datang dari home.js)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam) {
        searchInput.value = categoryParam;
        filterBooks();
    }
});

// Menambahkan animasi fade in sederhana via JS agar tidak merusak CSS tim
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
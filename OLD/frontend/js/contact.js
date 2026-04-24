document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form-wrapper form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Mohon lengkapi semua kolom yang tersedia.');
                return;
            }

            alert(`Terima kasih, ${name}! Pesan Anda telah kami terima. Kami akan segera merespons melalui email: ${email}.`);

            contactForm.reset();
        });
    }
});
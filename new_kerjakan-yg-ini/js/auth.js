// ============================================================
// auth.js — LibrAspire
// Fitur: Validasi Form Live, Toggle Password, & UI Feedback
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const authForms = document.querySelectorAll('.classic-form');

    // 1. Tambahkan Tombol "Show Password" secara dinamis
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        // Bungkus input dalam div agar posisi icon absolute relatif terhadap div ini
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        // Buat tombol toggle
        const toggleBtn = document.createElement('span');
        toggleBtn.innerHTML = '👁️';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 0.9rem;
            opacity: 0.6;
            user-select: none;
        `;

        toggleBtn.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                toggleBtn.innerHTML = '🙈';
            } else {
                input.type = 'password';
                toggleBtn.innerHTML = '👁️';
            }
        });

        wrapper.appendChild(toggleBtn);
    });

    // 2. Validasi Real-time (Feedback Visual)
    const validateInput = (input) => {
        if (input.type === 'email') {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(input.value);
        }
        if (input.type === 'password') {
            return input.value.length >= 6; // Minimal 6 karakter
        }
        return input.value.trim() !== '';
    };

    const inputs = document.querySelectorAll('.classic-form input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (validateInput(input)) {
                input.style.borderColor = 'var(--color-accent-light)';
                input.style.boxShadow = 'none';
            } else {
                input.style.borderColor = 'var(--color-accent-dark)';
            }
        });
    });

    // 3. Efek Shake jika Form Error saat Submit
    authForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            const formInputs = form.querySelectorAll('input');

            formInputs.forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                    input.style.borderColor = 'var(--color-accent-dark)';
                }
            });

            if (!isValid) {
                e.preventDefault(); // Jangan kirim form jika tidak valid
                
                // Efek shake pada card
                const card = form.closest('.auth-card');
                card.style.animation = 'shake 0.4s ease-in-out';
                
                // Hapus class animasi setelah selesai agar bisa diulang
                setTimeout(() => {
                    card.style.animation = '';
                }, 400);

                alert('Mohon periksa kembali form Anda. Email harus valid dan password minimal 6 karakter.');
            }
        });
    });
});

// Tambahkan animasi shake ke dokumen
const authStyle = document.createElement('style');
authStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        50% { transform: translateX(8px); }
        75% { transform: translateX(-8px); }
    }
`;
document.head.appendChild(authStyle);
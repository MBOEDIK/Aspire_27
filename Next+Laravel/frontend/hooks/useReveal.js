import { useEffect } from 'react';

export default function useReveal() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.reveal'));
        if (elements.length === 0) {
            return undefined;
        }

       const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Tambahkan baris ini agar observer berhenti memantau elemen yang sudah muncul
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
}

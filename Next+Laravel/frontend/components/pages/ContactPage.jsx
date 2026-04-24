import { useState } from 'react';
import { contactInfo } from '../../data/siteData';
import { useToast } from '../../context/ToastContext';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    
    // Inisialisasi Toast
    const toast = useToast();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast("Mohon lengkapi semua kolom yang tersedia.");
            return;
        }

        // Berhasil Mengirim Pesan
        toast(`Terima kasih, ${form.name}! Pesan Anda telah kami terima.`);
        
        // Reset Form
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <main>
            <section className="contact-hero">
                <div className="container">
                    <h2 className="contact-title reveal">Kirimkan Surat Anda</h2>
                    <p className="hero-subtitle reveal">Kami selalu terbuka untuk pertanyaan, saran, maupun kolaborasi literasi.</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info card reveal">
                            <h3>Informasi Perpustakaan</h3>
                            {contactInfo.map((item) => (
                                <div className="info-item" key={item.label}>
                                    <p>
                                        <strong>{item.label}</strong>
                                    </p>
                                    <p>{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="contact-form-wrapper reveal">
                            <form className="classic-form" onSubmit={handleSubmit}>
                                <h3 className="form-heading">Formulir Pesan</h3>
                                <div className="form-group">
                                    <label htmlFor="name">Nama Lengkap:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Tuliskan nama Anda..."
                                        value={form.name}
                                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Alamat Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Email untuk balasan dari kami..."
                                        value={form.email}
                                        onChange={(event) => setForm({ ...form, email: event.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Pesan Anda:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        required
                                        placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                                        value={form.message}
                                        onChange={(event) => setForm({ ...form, message: event.target.value })}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Kirimkan Pesan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
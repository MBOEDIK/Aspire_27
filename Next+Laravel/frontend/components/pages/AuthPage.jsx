import { useEffect, useState } from 'react';
import PasswordField from '../PasswordField';
import { useToast } from '../../context/ToastContext';

export default function AuthPage() {
    const [login, setLogin] = useState({ email: '', password: '' });
    const [register, setRegister] = useState({ name: '', email: '', password: '' });
    const [shake, setShake] = useState('');
    
    // Inisialisasi Toast
    const toast = useToast();

    const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const validatePassword = (value) => value.length >= 6;

    const submitLogin = (event) => {
        event.preventDefault();
        
        if (!validateEmail(login.email) || !validatePassword(login.password)) {
            setShake('login');
            toast("Mohon periksa kembali form Anda. Email harus valid dan password minimal 6 karakter.");
            return;
        }

        // Jika validasi lolos, toast sukses
        toast("Selamat datang kembali! Anda berhasil masuk.");
    };

    const submitRegister = (event) => {
        event.preventDefault();
        
        if (!register.name.trim() || !validateEmail(register.email) || !validatePassword(register.password)) {
            setShake('register');
            toast("Gagal daftar. Pastikan semua kolom terisi dengan benar.");
            return;
        }

        // Berhasil Registrasi
        toast("Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi.");
        console.log(`Registrasi berhasil untuk ${register.name}.`);
        setRegister({ name: '', email: '', password: '' }); // Reset form setelah sukses
    };

    useEffect(() => {
        if (!shake) return;

        // Timer harus pas dengan durasi animasi CSS (.4s = 400ms)
        const timeoutId = setTimeout(() => setShake(''), 400);
        return () => clearTimeout(timeoutId);
    }, [shake]);

    return (
        <main>
            <section className="auth-section">
                <div className="container">
                    <h2 className="section-title reveal">Akses Perpustakaan</h2>
                    <p className="auth-subtitle reveal">
                        Silakan masuk ke akun Anda atau mendaftar untuk menjadi anggota baru.
                    </p>

                    <div className="auth-grid">
                        {/* --- LOGIN CARD --- */}
                        {/* Memisahkan reveal (pembungkus animasi masuk) dari card (animasi shake) */}
                        <div className="reveal">
                            <div className={`auth-card${shake === 'login' ? ' shake' : ''}`}>
                                <h3 className="card-title">Login Member</h3>
                                <form className="classic-form" onSubmit={submitLogin}>
                                    <div className="form-group">
                                        <label htmlFor="login-email">Email:</label>
                                        <input
                                            type="email"
                                            id="login-email"
                                            name="email"
                                            required
                                            placeholder="Masukkan email Anda..."
                                            value={login.email}
                                            onChange={(event) => setLogin({ ...login, email: event.target.value })}
                                        />
                                    </div>
                                    <PasswordField
                                        id="login-password"
                                        name="password"
                                        placeholder="Masukkan password..."
                                        value={login.password}
                                        onChange={(event) => setLogin({ ...login, password: event.target.value })}
                                    />
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary">
                                            Masuk
                                        </button>
                                        <a href="#" className="forgot-link">
                                            Lupa Password?
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* --- REGISTER CARD --- */}
                        <div className="reveal">
                            <div className={`auth-card register-card${shake === 'register' ? ' shake' : ''}`}>
                                <h3 className="card-title">Daftar Anggota Baru</h3>
                                <form className="classic-form" onSubmit={submitRegister}>
                                    <div className="form-group">
                                        <label htmlFor="reg-name">Nama Lengkap:</label>
                                        <input
                                            type="text"
                                            id="reg-name"
                                            name="name"
                                            required
                                            placeholder="Nama sesuai kartu identitas..."
                                            value={register.name}
                                            onChange={(event) => setRegister({ ...register, name: event.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="reg-email">Email:</label>
                                        <input
                                            type="email"
                                            id="reg-email"
                                            name="email"
                                            required
                                            placeholder="Alamat email aktif..."
                                            value={register.email}
                                            onChange={(event) => setRegister({ ...register, email: event.target.value })}
                                        />
                                    </div>
                                    <PasswordField
                                        id="reg-password"
                                        name="password"
                                        placeholder="Buat password yang kuat..."
                                        value={register.password}
                                        onChange={(event) => setRegister({ ...register, password: event.target.value })}
                                    />
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-outline">
                                            Daftar Sekarang
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
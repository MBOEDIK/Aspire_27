import { useEffect, useState } from 'react';
import PasswordField from '../PasswordField';

export default function AuthPage() {
    const [login, setLogin] = useState({ email: '', password: '' });
    const [register, setRegister] = useState({ name: '', email: '', password: '' });
    const [shake, setShake] = useState('');

    const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const validatePassword = (value) => value.length >= 6;

    const submitLogin = (event) => {
        event.preventDefault();
        if (!validateEmail(login.email) || !validatePassword(login.password)) {
            setShake('login');
            window.alert('Mohon periksa kembali form Anda. Email harus valid dan password minimal 6 karakter.');
            return;
        }
        window.alert(`Login berhasil untuk ${login.email}.`);
    };

    const submitRegister = (event) => {
        event.preventDefault();
        if (!register.name.trim() || !validateEmail(register.email) || !validatePassword(register.password)) {
            setShake('register');
            window.alert('Mohon periksa kembali form Anda. Email harus valid dan password minimal 6 karakter.');
            return;
        }
        window.alert(`Registrasi berhasil untuk ${register.name}.`);
    };

    useEffect(() => {
        if (!shake) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => setShake(''), 400);
        return () => window.clearTimeout(timeoutId);
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
                        <div className={`auth-card reveal${shake === 'login' ? ' shake' : ''}`}>
                            <h3 className="card-title">Login Member</h3>
                            <form action="#" method="post" className="classic-form" onSubmit={submitLogin}>
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

                        <div className={`auth-card register-card reveal${shake === 'register' ? ' shake' : ''}`}>
                            <h3 className="card-title">Daftar Anggota Baru</h3>
                            <form action="#" method="post" className="classic-form" onSubmit={submitRegister}>
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
            </section>
        </main>
    );
}

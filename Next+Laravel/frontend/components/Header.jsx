import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { navItems } from '../data/siteData';

export default function Header() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [router.asPath]);

    const currentPath = useMemo(() => {
        if (router.pathname === '/') {
            return '/home';
        }

        return router.pathname;
    }, [router.pathname]);

    return (
        <header className="main-header">
            <div className="container">
                <h1 id="logo">LibrAspire</h1>

                <nav id="navbar" className={`navbar${menuOpen ? ' open' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link${currentPath === item.href ? ' active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <button
                    type="button"
                    className="hamburger-btn"
                    aria-label="Toggle navigation"
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    {menuOpen ? 'x' : '≡'}
                </button>

                <div className="auth-buttons">
                    <Link href="/login" className="btn btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        Login
                    </Link>
                    <Link href="/login" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        Register
                    </Link>
                </div>
                <p className="tagline">
                    <strong>Temukan</strong> dan <em>pinjam</em> buku dengan mudah.
                    <br />
                    Lebih dari 12.000 buku tersedia.
                </p>
            </div>
            <hr />
        </header>
    );
}

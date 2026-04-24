import '../styles/globals.css';
import { ToastProvider } from '../context/ToastContext'; // Impor provider-nya

export default function App({ Component, pageProps }) {
    return (
        // Provider HARUS membungkus Component agar semua halaman bisa akses toast
        <ToastProvider>
            <Component {...pageProps} />
        </ToastProvider>
    );
}
import Footer from './Footer';
import Header from './Header';
import useReveal from '../hooks/useReveal';

export default function AppShell({ children }) {
    useReveal();

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

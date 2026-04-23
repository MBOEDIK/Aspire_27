import Head from 'next/head';
import AppShell from '../components/AppShell';
import ContactPage from '../components/pages/ContactPage';

export default function ContactRoute() {
    return (
        <>
            <Head>
                <title>Contact Us - LibrAspire</title>
            </Head>
            <AppShell>
                <ContactPage />
            </AppShell>
        </>
    );
}

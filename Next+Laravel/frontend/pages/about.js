import Head from 'next/head';
import AboutPage from '../components/pages/AboutPage';
import AppShell from '../components/AppShell';

export default function AboutRoute() {
    return (
        <>
            <Head>
                <title>About - LibrAspire</title>
            </Head>
            <AppShell>
                <AboutPage />
            </AppShell>
        </>
    );
}

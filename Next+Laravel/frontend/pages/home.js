import Head from 'next/head';
import AppShell from '../components/AppShell';
import HomePage from '../components/pages/HomePage';

export default function HomeRoute() {
    return (
        <>
            <Head>
                <title>LibrAspire - Find and Borrow Books Easily</title>
            </Head>
            <AppShell>
                <HomePage />
            </AppShell>
        </>
    );
}

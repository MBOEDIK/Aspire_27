import Head from 'next/head';
import AppShell from '../components/AppShell';
import AuthPage from '../components/pages/AuthPage';

export default function LoginRoute() {
    return (
        <>
            <Head>
                <title>Login & Register - LibrAspire</title>
            </Head>
            <AppShell>
                <AuthPage />
            </AppShell>
        </>
    );
}

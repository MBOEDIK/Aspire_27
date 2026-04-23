import Head from 'next/head';
import AppShell from '../components/AppShell';
import CatalogPage from '../components/pages/CatalogPage';

export default function CatalogRoute() {
    return (
        <>
            <Head>
                <title>Catalog - LibrAspire</title>
            </Head>
            <AppShell>
                <CatalogPage />
            </AppShell>
        </>
    );
}

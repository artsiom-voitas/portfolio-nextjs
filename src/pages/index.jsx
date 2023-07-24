import Home from '@/components/Home';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>AV | Portfolio</title>
                <meta
                    name="description"
                    content="Frontend developer Artsiom Voitas' portfolio"
                />
            </Head>
            <main className="flex min-h-screen w-full items-center text-dark">
                <Layout>
                    <Home />
                </Layout>
            </main>
        </>
    );
}

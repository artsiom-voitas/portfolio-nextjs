import Header from '@/components/Header';
import '../assets/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont'
});
export default function App({ Component, pageProps }) {
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link
                rel="icon"
                href="/favicon.ico"
            />
            <main className={`${montserrat.variable} min-h-screen w-full bg-light font-mont`}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
}

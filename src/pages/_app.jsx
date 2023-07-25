import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Montserrat } from 'next/font/google';
import '../assets/styles/globals.css';

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
            <main
                className={`${montserrat.variable} min-h-screen w-full bg-light font-mont dark:bg-dark`}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
}

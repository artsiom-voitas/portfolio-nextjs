import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';

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
                <NavBar />
                <Component {...pageProps} />
            </main>
        </>
    );
}

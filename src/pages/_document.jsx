import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="theme-color"
                    content="#f5f5f5"
                />
            </Head>
            <body className="bg-light dark:bg-dark">
                <Script
                    id="theme-switcher"
                    strategy="beforeInteractive">
                    {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      document.documentElement.classList.add('dark')
                    } else {
                      document.documentElement.classList.remove('dark')
                    }`}
                </Script>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

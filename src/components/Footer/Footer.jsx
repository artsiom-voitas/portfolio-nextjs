import Link from 'next/link';
import Layout from '../Layout';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium">
            <Layout className="mt-2 flex items-center justify-between py-8">
                <span>{currentYear} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Build With
                    <Link
                        className="ml-1 rounded-lg border border-solid border-black bg-black p-1 px-2 text-white hover:bg-white hover:text-black"
                        href={'https://nextjs.org/'}
                        target={'_blank'}>
                        Next.js
                    </Link>
                </div>
            </Layout>
        </footer>
    );
}

export default Footer;

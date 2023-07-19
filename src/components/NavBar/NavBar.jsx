import Link from 'next/link';
import Logo from './Logo';
import NavLink from './NavLink';
import TwitterIcon from '../icons/TwitterIcon';

function NavBar() {
    return (
        <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
            <nav className="flex justify-between gap-8">
                <NavLink
                    href="/"
                    title="Home"
                />
                <NavLink
                    href="/about"
                    title="About"
                />
                <NavLink
                    href="/projects"
                    title="Projects"
                />
                <NavLink
                    href="/articles"
                    title="Articles"
                />
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
            <nav>
                <Link
                    href="/"
                    target={'_blank'}></Link>
                <Link
                    href="/"
                    target={'_blank'}>
                    T
                </Link>
                <Link
                    href="/"
                    target={'_blank'}>
                    T
                </Link>
                <Link
                    href="/"
                    target={'_blank'}>
                    T
                </Link>
            </nav>
        </header>
    );
}

export default NavBar;

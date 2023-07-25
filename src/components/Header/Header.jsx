import Logo from './Logo';
import NavLinks from './NavLinks/NavLinks';
import SocialLinks from './SocialLinks';

function Header() {
    return (
        <header
            className="flex w-full items-center justify-between px-32
            py-8 font-medium dark:text-light">
            <NavLinks />
            <Logo />
            <SocialLinks />
        </header>
    );
}

export default Header;

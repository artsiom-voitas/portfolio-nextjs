import Logo from './Logo';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

function NavBar() {
    return (
        <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
            <NavLinks />
            <Logo />
            <SocialLinks />
        </header>
    );
}

export default NavBar;

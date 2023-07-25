import { Logo, NavLinks, NavMobile, SocialLinks } from '@/components/Header';
import SwitchThemeButton from '../SwitchThemeButton';

function Header() {
    return (
        <header
            className="relative z-10 flex w-full items-center justify-between
            px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
            <Logo />
            <div className="flex w-full items-center justify-between lg:hidden">
                <NavLinks />
                <SocialLinks>
                    <SwitchThemeButton className="ml-4" />
                </SocialLinks>
            </div>
            <NavMobile />
        </header>
    );
}

export default Header;

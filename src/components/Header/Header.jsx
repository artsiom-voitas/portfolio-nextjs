import { Logo, NavLinks, NavMobile, SocialLinks } from '@/components/Header';
import { motion } from 'framer-motion';
import SwitchThemeButton from '../SwitchThemeButton';
import { XIcon } from '../icons';

function Header() {
    return (
        <header
            className="relative z-10 flex w-full items-center justify-between
            px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
            <Logo />
            <div className="flex w-full items-center justify-between lg:hidden">
                <NavLinks />
                <SocialLinks>
                    <motion.a
                        href="https://x.com/artsiom_voitas"
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="mx-3 w-8 lg:w-10 sm:mx-3">
                        <XIcon className="dark:fill-light" />
                    </motion.a>
                    <SwitchThemeButton className="ml-3" />
                </SocialLinks>
            </div>
            <NavMobile />
        </header>
    );
}

export default Header;

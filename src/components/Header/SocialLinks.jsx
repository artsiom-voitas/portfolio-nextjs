import { motion } from 'framer-motion';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import {
    GithubIcon,
    LinkedinIcon,
    MoonIcon,
    SunIcon,
    TwitterIcon
} from '../icons';

function SocialLinks() {
    const [mode, setMode] = useThemeSwitcher();

    function changeTheme() {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    return (
        <nav className="flex flex-wrap items-center justify-center">
            <motion.a
                href="https://github.com/artsiom-voitas"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mr-3 w-6">
                <GithubIcon />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/artsiom-voitas/"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mx-3 w-6">
                <LinkedinIcon />
            </motion.a>
            <motion.a
                href="https://twitter.com/artsiom_voitas"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="ml-3 w-6">
                <TwitterIcon />
            </motion.a>
            <button
                onClick={changeTheme}
                className={`ml-4 flex items-center justify-center rounded-full p-1
                ${
                    mode === 'light'
                        ? 'bg-dark text-light'
                        : 'bg-light text-dark'
                }`}>
                {mode === 'dark' ? (
                    <SunIcon className="fill-dark" />
                ) : (
                    <MoonIcon className="fill-dark" />
                )}
            </button>
        </nav>
    );
}

export default SocialLinks;

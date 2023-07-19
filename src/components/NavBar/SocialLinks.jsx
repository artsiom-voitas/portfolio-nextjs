import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';

function SocialLinks() {
    return (
        <nav className="flex flex-wrap items-center justify-center">
            <motion.a
                href="https://github.com/artsiom-voitas"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mr-3 w-6">
                <GithubIcon className={undefined} />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/artsiom-voitas/"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mx-3 w-6">
                <LinkedinIcon className={undefined} />
            </motion.a>
            <motion.a
                href="https://twitter.com/artsiom_voitas"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="ml-3 w-6">
                <TwitterIcon className={undefined} />
            </motion.a>
        </nav>
    );
}

export default SocialLinks;

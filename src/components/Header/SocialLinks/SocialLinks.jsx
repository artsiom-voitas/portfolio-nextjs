import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../icons';

function SocialLinks({ children, className = '' }) {
    return (
        <nav
            className={`flex flex-wrap items-center justify-center ${className}`}>
            <motion.a
                href="https://github.com/artsiom-voitas"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mr-3 w-6 rounded-full bg-light dark:bg-dark sm:mx-1">
                <GithubIcon />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/artsiom-voitas/"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mx-3 w-6 sm:mx-1">
                <LinkedinIcon />
            </motion.a>
            <motion.a
                href="https://twitter.com/artsiom_voitas"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="ml-3 w-6 sm:mx-1">
                <TwitterIcon />
            </motion.a>
            {children}
        </nav>
    );
}

SocialLinks.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default SocialLinks;

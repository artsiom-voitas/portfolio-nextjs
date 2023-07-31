import { NavLinksMobile, SocialLinks } from '@/components/Header';
import { XIcon } from '@/components/icons';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function NavModal({ setIsOpen }) {
    const [currentHeight, setCurrentHeight] = useState(null);

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
            body.getBoundingClientRect().height,
            html.getBoundingClientRect().height
        );
        setCurrentHeight(height);
        return () => setCurrentHeight(null);
    }, []);

    return (
        <div className="hidden lg:block">
            <div
                className="absolute left-0 top-0 w-[100%]"
                onClick={() => setIsOpen(false)}
                style={{ height: currentHeight }}
            />
            <motion.div
                initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="fixed left-1/2 top-1/2 z-10 flex min-w-[70vw] -translate-x-1/2
                        -translate-y-1/2 flex-col items-center justify-around rounded-lg
                       bg-dark/90 py-24 backdrop-blur-md dark:bg-light/75">
                <NavLinksMobile
                    className="mb-8 flex flex-col items-center justify-center"
                    setIsOpen={setIsOpen}
                />
                <SocialLinks className="mt-2">
                    <motion.a
                        href="https://x.com/artsiom_voitas"
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-3 w-8 lg:w-10 sm:mx-3">
                        <XIcon className="fill-light dark:fill-dark" />
                    </motion.a>
                </SocialLinks>
            </motion.div>
        </div>
    );
}

NavModal.propTypes = {
    setIsOpen: PropTypes.func.isRequired
};

export default NavModal;

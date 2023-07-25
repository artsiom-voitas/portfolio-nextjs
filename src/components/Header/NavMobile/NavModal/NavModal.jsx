import { NavLinksMobile, SocialLinks } from '@/components/Header';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function NavModal({ isOpen, setIsOpen }) {
    return (
        <>
            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="fixed left-1/2 top-1/2 z-10 flex min-w-[70vw]
                        -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg
                       bg-dark/90 py-32 backdrop-blur-md dark:bg-light/75">
                    <NavLinksMobile
                        className="flex flex-col items-center justify-center"
                        setIsOpen={setIsOpen}
                    />
                    <SocialLinks className="mt-2" />
                </motion.div>
            ) : null}
        </>
    );
}

NavModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
};

export default NavModal;

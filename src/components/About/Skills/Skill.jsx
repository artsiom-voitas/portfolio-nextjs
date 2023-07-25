import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Skill({ title, x, y, className = '' }) {
    return (
        <motion.div
            className={`absolute flex cursor-pointer items-center justify-center
            rounded-full bg-dark px-6  py-3 font-semibold
            text-light shadow-dark  dark:bg-light dark:text-dark dark:shadow-light
            lg:px-4 lg:py-2 md:bg-transparent md:px-3 md:py-1.5 md:text-sm xs:font-bold xs:text-dark
            xs:dark:bg-transparent xs:dark:text-light
                ${className}`}
            whileHover={{ scale: 1.1 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}>
            {title}
        </motion.div>
    );
}

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Skill;

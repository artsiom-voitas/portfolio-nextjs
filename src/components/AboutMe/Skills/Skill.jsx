import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Skill({ title, x, y, className = '' }) {
    return (
        <motion.div
            className={`absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark
                ${className}`}
            whileHover={{ scale: 1.1 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}>
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
